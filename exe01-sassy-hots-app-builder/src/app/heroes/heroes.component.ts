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
  public heroName;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
    this.getHeroName();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
      );
  }

  getHeroName(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        // heroes => console.log(
        //   heroes[0].name
        //   .toLowerCase()
        //   .replace(/[\'.]/g, '')
        //   .replace(/[ ]/g, '-')
        //   .replace('ú', 'u'))
        // );
      );
  }

}
