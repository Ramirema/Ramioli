import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'https://hotsapi.net/api/v1/heroes';  // URL to web api
  public heroName;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => heroes),
        catchError(this.handleError('getHeroes', []))
      );
      // .pipe(
      //   tap(heroes => {console.log(heroes[0].name); this.log(`fetched heroes`)}),
      //   catchError(this.handleError('getHeroes', []))
      // );
  }

  /** GET heroes from the server */
  getHeroName(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(
          heroes => heroes
          .map(
            heroName => console.log(heroName.name
              .toLowerCase()
              .replace(/[\'.]/g, '')
              .replace(/[ ]/g, '-')
              .replace('ú', 'u'))
          )
        ),
        catchError(this.handleError('getHeroes', []))
      );
      // .pipe(
      //   tap(heroes => {console.log(heroes[0].name); this.log(`fetched heroes`)}),
      //   catchError(this.handleError('getHeroes', []))
      // );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(name: string): Observable<Hero> {
    const url = `${this.heroesUrl}/?name=${name}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero name=${name}`);
        }),
        catchError(this.handleError<Hero>(`getHero name=${name}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(name: string): Observable<Hero> {
    const url = `${this.heroesUrl}/${name}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero name=${name}`)),
      catchError(this.handleError<Hero>(`getHero name=${name}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
