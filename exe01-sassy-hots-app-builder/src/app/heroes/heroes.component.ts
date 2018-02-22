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
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
      );
  }
}
