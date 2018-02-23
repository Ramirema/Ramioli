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

  heroes: Hero[];

  public heroez: any[] = [];
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
          this.heroesOff = data
          .filter(test => test.translations.length > 0);
          return this.heroes = this.heroesOff;
        }
      );
  }

  showHeroName(): void {
    this.heroService.getHeroes()
    .subscribe(
      data => {
        const heroName = data
        .map(
          item => item.name
          .toLowerCase()
          .replace(/[\'.]/g, '')
          .replace(/[ ]/g, '-')
          .replace('ú', 'u')
        );
        console.log(heroName);
        // console.log(this.heroes);
        // const heroOff = this.heroes.filter(test => test.translations.length > 0);
        // this.heroesOff = this.heroes.filter(test => test.translations.length > 0);
        // console.log(this.heroesOff);
        // console.log(heroOff);
        return this.heroez = heroName;
      },
      err => console.error(err),
      () => console.log('done loading heroNamez')
    );
  }
}
