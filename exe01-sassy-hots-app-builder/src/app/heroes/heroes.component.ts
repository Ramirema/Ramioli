// CONTROLLER
// --------------------
// MAIN
import { Component, OnInit, NgModule } from '@angular/core';
// MODEL -- TYPES
import { Hero } from '../hero';
// JSON -- DATA
// import { HEROES } from '../mock-heroes';
// SERVICE
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  // LIST OF ALL HEROES
  heroes: Hero[];
  // L
  public heroesOff: any[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.showHeroName();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        data => {
          // Sort heroes by name ASC
          this.heroesOff = data.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
          })
          // Select heroes where translations exists
          .filter(test => test.translations.length > 0);
          // Return list of all heroes
          return this.heroes = this.heroesOff;
        },
        err => console.error(err),
        () => console.log('done loading Heroes list')
      );
  }

  showHeroName(): void {
    this.heroService.getHeroes()
    .subscribe(
      data => {
        const heroName = this.heroesOff = data
        // Sort heroes by name ASC
        .sort(function(a, b) {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        })
        // Select heroes where translations exists
        .filter(test => test.translations.length > 0)
        // Convert Heroes names for Link Names (without special Chars)
        .map(
          item => item.name
          .toLowerCase()
          .replace(/[\'.]/g, '')
          .replace(/[ ]/g, '-')
          .replace('ú', 'u')
        );
        // Return list of all heroes formated names
        return this.heroesOff = heroName;
      },
      err => console.error(err),
      () => console.log('done loading hero link names')
    );
  }
}
