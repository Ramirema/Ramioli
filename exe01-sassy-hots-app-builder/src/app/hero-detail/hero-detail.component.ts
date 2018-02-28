import { Component, OnInit, Input } from '@angular/core';
// MODEL
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  public heroz;
  public abilities;
  public talents;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getHeroLinkName();
    this.getHeroAbilities();
    this.getHeroTalents();
  }

  getHero(): void {
    const short_name = this.route.snapshot.paramMap.get('short_name');
    this.heroService.getHero(short_name)
      .subscribe(
        hero => {
          this.hero = hero;
          // console.log(hero);
        }
      );

  }

  getHeroAbilities(): void {
    const short_name = this.route.snapshot.paramMap.get('short_name');

    this.heroService.getHero(short_name)
      .subscribe(
        data => {

          // Rajoute la propriété SORT pour ordonner
          this.abilities = data.abilities;
          this.abilities[0].sort = 6;
          this.abilities[1].sort = 3;
          this.abilities[2].sort = 1;
          this.abilities[3].sort = 4;
          this.abilities[4].sort = 5;
          this.abilities[5].sort = 2;

          // Liste les abilities SORT par ordre ASC
          this.abilities = this.abilities
            .sort((a, b) => {
              if (a.sort < b.sort) { return -1; }
              if (a.sort > b.sort) { return 1; }
              return 0;
            });

          // Format all abilities names as formatted link name
          for (let index = 0; index < data.abilities.length; index++) {
            this.abilities[index].title = data.abilities[index].title
              .toLowerCase()
              .replace(/[\',.!]/g, '')
              .replace(/[ ]/g, '-')
              .replace('ú', 'u');
          }

          // console.log(data.abilities);

        }
      );
  }

  getHeroTalents(): void {
    const short_name = this.route.snapshot.paramMap.get('short_name');
    this.heroService.getHeroLinkName(short_name)
      .subscribe(
        data => {

          // Liste les abilities SORT par ordre ASC
          this.talents = data.talents
            .sort((a, b) => {
              const n = a.level - b.level;
              if (n !== 0) {
                return n;
              }
              return a.sort - b.sort;
            });
            // console.log(this.talents);

          // Format all talents names as formatted link name
          for (let index = 0; index < data.talents.length; index++) {
            this.talents[index].title = data.talents[index].title
              // .toLowerCase()
              .replace(/[\':,.!?-]/g, '')
              .replace(/[ ]/g, '')
              .replace('ú', 'u');
            // console.log(this.talents[index].title);
            }
          }
      );
  }

  getHeroLinkName(): void {
    const linkName = this.route.snapshot.paramMap.get('short_name');
    this.heroService.getHeroLinkName(linkName)
      .subscribe(
        data => {
          const heroLinkName = data.name
            .toLowerCase()
            .replace(/[\'.]/g, '')
            .replace(/[ ]/g, '-')
            .replace('ú', 'u');
          console.log(heroLinkName);
          if (heroLinkName === 'cho' || heroLinkName === 'gall'){
            return this.heroz = 'chogall'
          }
          return this.heroz = heroLinkName;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
