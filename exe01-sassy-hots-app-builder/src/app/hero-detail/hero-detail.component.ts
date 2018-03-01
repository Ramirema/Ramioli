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

          for (let z = 0; z < data.abilities.length; z++) {

            // #1 ABILITIES
            if (this.abilities[z].name === 'Q1') {
              this.abilities[z].sort = 1;
            } else if (this.abilities[z].name === 'W1') {
              this.abilities[z].sort = 2;
            } else if (this.abilities[z].name === 'E1') {
              this.abilities[z].sort = 3;
            } else if (this.abilities[z].name === 'R1') {
              this.abilities[z].sort = 4;
            } else if (this.abilities[z].name === 'R2') {
              this.abilities[z].sort = 5;
            } else if (this.abilities[z].name === 'R3') {
              this.abilities[z].sort = 6;
              // TRAIT
            } else if (this.abilities[z].name === 'D1') {
              this.abilities[z].sort = 7;
              this.abilities[z].trait = 'Trait';
            // #2 ABILITIES
            } else if (this.abilities[z].name === 'Q2') {
              this.abilities[z].sort = 8;
            } else if (this.abilities[z].name === 'W2') {
              this.abilities[z].sort = 9;
            } else if (this.abilities[z].name === 'E2') {
              this.abilities[z].sort = 10;
            } else if (this.abilities[z].name === 'D2') {
              this.abilities[z].sort = 11;
            // BASELINE ABILITY
            } else if (this.abilities[z].hotkey === '1') {
              this.abilities[z].sort = 12;
            // OTHERS
            } else {
              this.abilities[z].sort = z + 12;
            }

            // BRIGHTWING [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Phase Shift') {
              this.abilities[z].icon = '../../assets/icons/abilities/brightwing/phase-shift.png';
            }

            // DEHAKA [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Brushstalker') {
              this.abilities[z].icon = '../../assets/icons/abilities/dehaka/brushstalker.png';
            }

            // TYCHUS [ODIN ABILITIES] ICONS FIXED
            if (this.abilities[z].title === 'Ragnarok Missiles') {
              this.abilities[z].icon = '../../assets/icons/abilities/tychus/odin/tychus-odin-ragnarok-rissiles.png';
            } else if (this.abilities[z].title === 'Thrusters') {
              this.abilities[z].icon = '../../assets/icons/abilities/tychus/odin/tychus-odin-thrusters.png';
            }

            // ZERATUL [BASELINE ABILITY VORPAL BLADE + MIGHT OF THE NERAZIM] ICONS FIXED
            if (this.abilities[z].title === 'Vorpal Blade') {
              this.abilities[z].icon = '../../assets/icons/abilities/zeratul/vorpal-blade.png';
            } else if (this.abilities[z].title === 'Might of the Nerazim') {
              this.abilities[z].icon = '../../assets/icons/abilities/zeratul/might-of-the-nerazim.png';
            }

            // UTHER [Devotion + Flash of Light + Eternal Vanguard] ICONS FIXED
            if (this.abilities[z].title === 'Devotion') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/devotion.png';
            } else if (this.abilities[z].title === 'Flash of Light') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/flash-of-light.png';
            } else if (this.abilities[z].title === 'Eternal Vanguard') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/devotion.png';
            }

            // VALEERA [ALL ABILITIES] ICONS FIXED
            if (this.abilities[z].title === 'Sinister Strike') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_sinisterstrike.png';
            } else if (this.abilities[z].title === 'Blade Flurry') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_bladeflurry.png';
            } else if (this.abilities[z].title === 'Eviscerate') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_eviscerate.png';
            } else if (this.abilities[z].title === 'Smoke Bomb') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_smokebomb.png';
            } else if (this.abilities[z].title === 'Cloak of Shadows') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_cloakofshadows.png';
            } else if (this.abilities[z].title === 'Vanish') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/valeera_vanish.png';
            } else if (this.abilities[z].title === 'Ambush') {
              this.abilities[z].icon = '../../assets/icons/abilities/valeera/ambush.png';
            } else if (this.abilities[z].title === 'Cheap Shot') {
              this.abilities[z].icon = '../../assets/icons/abilities/valeera/cheap-shot.png';
            } else if (this.abilities[z].title === 'Garrote') {
              this.abilities[z].icon = '../../assets/icons/abilities/valeera/garrote.png';
            }

            // XUL [BASELINE ABILITY - BONE ARMOR] ICON FIXED
            if (this.abilities[z].title === 'Bone Armor') {
              this.abilities[z].icon = '../../assets/icons/abilities/xul/bone-armor.png';
            }

          }

          // Liste les abilities SORT par ordre ASC
          this.abilities = this.abilities
          .sort((a, b) => {
            if (a.sort < b.sort) { return -1; }
            if (a.sort > b.sort) { return 1; }
            return 0;
          });

          // Format all abilities names as formatted link name
          for (let index = 0; index < data.abilities.length; index++) {
            this.abilities[index].titleLink = data.abilities[index].title
              .toLowerCase()
              .replace(/[\',.!]/g, '')
              .replace(/[ ]/g, '-')
              .replace('ú', 'u');
          }

          console.log(this.abilities);

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

          // Format all talents names as formatted link name for images URL
          for (let index = 0; index < data.talents.length; index++) {

            this.talents[index].titleLink = data.talents[index].title

              // For all Heroes removes special chars and spaces
              .replace(/[\':,.!?-]/g, '')
              .replace(/[ ]/g, '');

              // For D.Va - Talent lvl 1 - Hit the Nitrous
              if ( this.talents[index].titleLink === 'HitTheNitrous' ) {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('The', 'the');
              // For D.Va - Talent lvl 4 - Get through This
              } else if (this.talents[index].titleLink === 'GetthroughThis') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('through', 'Through');
              // For Garrosh - Talent lvl 4 - In for the kill
              } else if (this.talents[index].titleLink === 'InfortheKill') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('for', 'For');
              // For Junkrat - Talent lvl 4 - In for the kill -Rejuvenescência
              } else if (this.talents[index].titleLink === 'TasteforExplosions') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('for', 'For');
              // For Lucio - Talent lvl 16 - Rejuvenescência
              } else if (this.talents[index].titleLink === 'Rejuvenescencia') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('Rejuvenescencia', 'Rejuvenescência');
              // For Samuro - Talent lvl 4 - One with the Wind -DanceofDeath
              } else if (this.talents[index].titleLink === 'OnewiththeWind') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('OnewiththeWind', 'OneWithTheWind');
              // For Samuro - Talent lvl 20 - Dance of Death
              } else if (this.talents[index].titleLink === 'DanceofDeath') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('DanceofDeath', 'DanceOfDeath');
              // For Zeratul - Talent lvl 10 - Might of the Nerazim
              } else if (this.talents[index].titleLink === 'MightoftheNerazim') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('MightoftheNerazim', 'MightOfTheNerazim');
              }

            }
            console.log(this.talents);
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

            if (heroLinkName === 'cho' || heroLinkName === 'gall') {
            return this.heroz = 'chogall';
          }
          return this.heroz = heroLinkName;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
