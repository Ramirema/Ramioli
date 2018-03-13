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
  // SECOND MODE [OWNER]
  public grouped: object = [];
  public keys = [];
  public basic: object = [];
  public beast = [];
  // ALL HEROICS
  public keyh = [];
  public special;
  public heroic;
  // E - ABILITY
  public testz;
  public abilityDefault;
  // Z - MOUNT
  public abilityMount;
  // D - ALL TRAITS [KHARAZIM]
  public keyt = [];
  public traits;

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
        data => {

          this.hero = data;

          // SET PICTURE + TITLE FOR "BEAST" MODE

          for (let i = 0; i < data.abilities.length; i++) {

            // ABATHUR
            if (data.abilities[i].title === 'Symbiote') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/symbiote.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // ALEXSTRASZA
            if (data.abilities[i].title === 'Dragonqueen') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/dragonqueen.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // DVA
            if (data.abilities[i].title === 'Pilot Mode') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/pilot-mode.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // GREYMANE
            if (data.abilities[i].title === 'Darkflight') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/darkflight.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // LEORIC
            if (data.abilities[i].title === 'Undying') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/undying.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // TYCHUS
            if (data.abilities[i].title === 'Commandeer Odin') {
              this.hero.beast = 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tychus_commandeerodin.jpg';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

            // UTHER
            if (data.abilities[i].owner === 'UtherEternalVanguard') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/devotion-eternal-vanguard.png';
              this.hero.beastName = data.abilities[1].title;
              this.hero.beastDesc = data.abilities[1].description;
            }

            // VALEERA
            if (data.abilities[i].title === 'Vanish') {
              this.hero.beast = 'https://www.heroesfire.com/images/wikibase/icon/abilities/vanish.png';
              this.hero.beastName = data.abilities[i].title;
              this.hero.beastDesc = data.abilities[i].description;
            }

          }

          console.log(this.hero);
        }
      );

  }

  getHeroAbilities(): void {
    const short_name = this.route.snapshot.paramMap.get('short_name');

    this.heroService.getHero(short_name)
      .subscribe(
        data => {

          this.abilities = data.abilities;

          // Rajoute la propriété SORT pour ordonner
          for (let z = 0; z < data.abilities.length; z++) {

            // #1 BASIC ABILITIES
            if (this.abilities[z].name === 'Q1') {
              this.abilities[z].sort = 1;
            } else if (this.abilities[z].name === 'W1') {
              this.abilities[z].sort = 2;
            } else if (this.abilities[z].name === 'E1') {
              this.abilities[z].sort = 3;
            // HEROIC ABILITIES
            } else if (this.abilities[z].name === 'R1') {
              this.abilities[z].sort = 4;
            } else if (this.abilities[z].name === 'R2') {
              this.abilities[z].sort = 5;
            } else if (this.abilities[z].name === 'R3') {
              this.abilities[z].sort = 6;
              // TRAITS
            } else if (this.abilities[z].name === 'D1') {
              this.abilities[z].sort = 7;
              this.abilities[z].trait = 'Trait';
            } else if (this.abilities[z].name === 'D2') {
              this.abilities[z].sort = 8;
              this.abilities[z].trait = 'Trait';
            } else if (this.abilities[z].name === 'D3') {
              this.abilities[z].sort = 9;
              this.abilities[z].trait = 'Trait';
            // #2 SECONDARY ABILITIES
            } else if (this.abilities[z].name === 'Q2') {
              this.abilities[z].sort = 10;
            } else if (this.abilities[z].name === 'W2') {
              this.abilities[z].sort = 11;
            } else if (this.abilities[z].name === 'E2') {
              this.abilities[z].sort = 12;
            // BASELINE ABILITIES
            } else if (this.abilities[z].hotkey === '1') {
              this.abilities[z].sort = 14;
            // OTHERS
            } else {
              this.abilities[z].sort = z + 14;
            }

          }

          for (let z = 0; z < data.abilities.length; z++) {

            // ABATHUR [ALL] ICONS FIXED
            if (this.abilities[z].title === 'Carapace') {
              // THERE IS NO ABA E1 ABILITY
              this.abilities[z].sort = 12;
              this.abilities[z].name = 'E2';
              this.abilities[z].icon = '../../assets/icons/abilities/abathur/carapace.png';
            } else if (this.abilities[z].title === 'Stab') {
              this.abilities[z].icon = '../../assets/icons/abilities/abathur/stab.png';
            } else if (this.abilities[z].title === 'Spike Burst') {
              this.abilities[z].icon = '../../assets/icons/abilities/abathur/spike-burst.png';
            } else if (this.abilities[z].title === 'Deep Tunnel') {
              this.abilities[z].icon = '../../assets/icons/abilities/abathur/mount.png';
              // this.abilities.splice(z, 1);
            } else if (this.abilities[z].title === 'Cancel Symbiote') {
              this.abilities.splice(z, 1);
            }

          }


          for (let z = 0; z < data.abilities.length; z++) {

            // ALL HEROES [REGROUP TRAITS ABILITIES]
            if (this.abilities[z].trait === 'Trait') {

              // REGROUP IN [] IF MORE THAN ONE trait ability
              const shapet = {};

              this.abilities.forEach(function (a) {
                shapet[a.trait] = shapet[a.trait] || [];
                shapet[a.trait].push({
                  cooldown: a.cooldown,
                  description: a.description
                  .replace('Quest:', '<font color="#FFD700"> \u2762 Quest</font> :')
                  .replace('Reward:', '<br/><font color="#FFD700"> \u2762 Reward</font> :'),
                  hotkey: a.hotkey,
                  icon: a.icon,
                  mana_cost: a.mana_cost,
                  name: a.name,
                  owner: a.owner,
                  sort: a.sort,
                  title: a.title,
                  // tslint:disable-next-line:max-line-length
                  titleLink: a.title.replace(/[\',.!]/g, '').replace(/[ ]/g, '-').replace(/[-]/g, '').replace('MightoftheNerazim', 'MightOfTheNerazim'),
                  trait: a.trait
                });
              });

              console.log(shapet);

              this.traits = shapet['Trait'];

            }
          }


          for (let z = 0; z < data.abilities.length; z++) {

            // ALEXSTRASZA
            if (this.abilities[z].title === 'Dragonqueen') {
              this.abilities[6] = {
                'owner': 'AlexstraszaDragon',
                'name': 'Q2',
                'title': 'Breath of Life',
                'description': 'Heal an ally for 20% of Alexstrasza\'s current Health.',
                'icon': './../../assets/icons/abilities/alexstrasza/breath-of-life.png',
                'cooldown': 3,
                // tslint:disable-next-line:max-line-length
                'hotkey': 'Q',
                'mana_cost': null,
                'trait': false
              };
              this.abilities[7] = {
                'owner': 'AlexstraszaDragon',
                'name': 'W2',
                'title': 'Preservation',
                // tslint:disable-next-line:max-line-length
                'description': 'Plant a seed of healing that blooms after 3 seconds, healing nearby allied Heroes for 30% of their maximum Health.',
                'icon': './../../assets/icons/abilities/alexstrasza/preservation.png',
                'cooldown': 16,
                // tslint:disable-next-line:max-line-length
                'hotkey': 'W',
                'mana_cost': null,
                'trait': false
              };
              this.abilities[8] = {
                'owner': 'AlexstraszaDragon',
                'name': 'E2',
                'title': 'Wing Buffet',
                // tslint:disable-next-line:max-line-length
                'description': 'Deal 150 (+4% per level) damage to enemies in an area, knocking them back and Slowing them by 50% for 3 seconds.',
                'icon': './../../assets/icons/abilities/alexstrasza/wing-buffet.png',
                'cooldown': 4,
                // tslint:disable-next-line:max-line-length
                'hotkey': 'E',
                'mana_cost': null,
                'trait': false
              };
            }

            // BRIGHTWING [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Phase Shift') {
              this.abilities[z].icon = '../../assets/icons/abilities/brightwing/phase-shift.png';
            }

            // DEHAKA [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Brushstalker') {
              this.abilities[z].icon = '../../assets/icons/abilities/dehaka/brushstalker.png';
            }

            // FALSTAD [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Flight') {
              this.abilities[z].icon = '../../assets/icons/abilities/falstad/flight.png';
            }

            // GALL [BASELINE ABILITY - EYE OF KILLROGG] ICON FIXED
            if (this.abilities[z].title === 'Eye of Kilrogg') {
              this.abilities[z].icon = '../../assets/icons/abilities/gall/eye-of-killrogg.png';
            }

            // GAZLOWE [BASELINE ABILITY - ROCKIT TURRET] ICON FIXED
            if (this.abilities[z].title === 'Focus Turrets!') {
              this.abilities[z].icon = '../../assets/icons/abilities/gazlowe/rockit-turret.png';
            }

            // KHARAZIM [ALL TRAITS] ICONS FIXED
            if (this.abilities[z].title === 'Insight') {
              this.abilities[z].icon = '../../assets/icons/abilities/kharazim/insight.png';
              this.abilities.splice(z, 1);
            } else if (this.abilities[z].title === 'Transcendence') {
              this.abilities[z].icon = '../../assets/icons/abilities/kharazim/transcendence.png';
              this.abilities.splice(z, 1);
            } else if (this.abilities[z].title === 'Iron Fists') {
              this.abilities[z].icon = '../../assets/icons/abilities/kharazim/iron-fists.png';
              this.abilities.splice(z, 1);
            }

            // LEORIC [Drain essence + Ghastly Swing + Wrath Of The Bone King ] ICONS FIXED
            if (this.abilities[z].title === 'Drain Essence') {
              this.abilities[z].icon = '../../assets/icons/abilities/leoric/drain-essence.png';
            } else if (this.abilities[z].title === 'Wrath Of The Bone King') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/leoric_trait.png';
            } else if (this.abilities[z].title === 'Ghastly Swing') {
              this.abilities[z].icon = '../../assets/icons/abilities/leoric/ghastly-swing.png';
            } else if (this.abilities[z].title === 'Undying') {
              this.abilities[z].owner = 'LeoricUndying';
            }

            // LUNARA [MOUNT] ICONS FIXED
            if (this.abilities[z].title === 'Dryad\'s Swiftness') {
              this.abilities[z].icon = '../../assets/icons/abilities/lunara/dryads-swiftness.png';
            }

            // NOVA [TRAIT + BASELINE ABILITIES] ICONS FIXED
            if (this.abilities[z].title === 'Permanent Cloak') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/nova_personalcloaking.png';
            } else if (this.abilities[z].title === 'Ghost Protocol') {
              this.abilities[z].icon = '../../assets/icons/abilities/nova/ghost-protocol.png';
            } else if (this.abilities[z].title === 'Sniper') {
              console.log(z); // 2
              this.abilities.splice(z, 1);
            }

            // PROBIUS [MOUNT] ICON FIXED
            if (this.abilities[z].title === 'Worker Rush') {
              this.abilities[z].icon = '../../assets/icons/abilities/probius/worker-rush.png';
            }

            // SAMURO [TRAIT] ICON FIXED
            if (this.abilities[z].title === 'Image Transmission') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/samuro_flowingstrikes.png';
            }

            // HAMMER [Neosteel Plating] ICON FIXED
            if (this.abilities[z].title === 'Neosteel Plating') {
              // tslint:disable-next-line:max-line-length
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/sgthammer_neosteelplating.png';
            }

            // STITCHES [BASELINE ABILITY] ICON FIXED
            if (this.abilities[z].title === 'Helping Hand') {
              // tslint:disable-next-line:max-line-length
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/stitches_hook_var1.png';
            }

            // THE LOST VIKINGS [ALL] ICONS FIXED
            if (this.abilities[z].title === 'Select Olaf') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/lostvikings_selectolaf.png';
            } else if (this.abilities[z].title === 'Select Baleog') {
              // tslint:disable-next-line:max-line-length
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/lostvikings_selectbaleog.png';
            } else if (this.abilities[z].title === 'Select Erik') {
              this.abilities[z].icon = 'https://psionic-storm.com/wp-content/themes/psionicstorm/img/abilities/lostvikings_selecterik.png';
            } else if (this.abilities[z].title === 'Viking Bribery') {
              this.abilities[z].icon = '../../assets/icons/abilities/vikings/viking-bribery.png';
            } else if (this.abilities[z].title === 'Select All Vikings') {
              this.abilities[z].icon = '../../assets/icons/abilities/vikings/select-all.png';
            } else if (this.abilities[z].title === 'Go Go Go!') {
              this.abilities[z].icon = '../../assets/icons/abilities/vikings/gogogo.png';
            } else if (this.abilities[z].title === 'Nordic Attack Squad') {
              this.abilities[z].icon = '../../assets/icons/abilities/vikings/nordic-attack-squad.png';
            }

            // TYCHUS [ODIN ABILITIES] ICONS FIXED
            if (this.abilities[z].title === 'Ragnarok Missiles') {
              this.abilities[z].icon = '../../assets/icons/abilities/tychus/odin/tychus-odin-ragnarok-rissiles.png';
            // HAMMER SAME TYCHUS THRUSTERS ABILITY NAME
            } else if (this.abilities[z].title === 'Thrusters' && this.abilities[z].owner === 'Sgt. Hammer') {
              this.abilities[z].icon = '../../assets/icons/abilities/hammer/siege-thrusters.png';
            } else if (this.abilities[z].title === 'Thrusters') {
              this.abilities[z].icon = '../../assets/icons/abilities/tychus/odin/tychus-odin-thrusters.png';
            }

            // ZERATUL [BASELINE ABILITY VORPAL BLADE + MIGHT OF THE NERAZIM] ICONS FIXED
            if (this.abilities[z].title === 'Vorpal Blade') {
              this.abilities[z].icon = '../../assets/icons/abilities/zeratul/vorpal-blade.png';
            } else if (this.abilities[z].title === 'Might of the Nerazim') {
              this.abilities[z].icon = '../../assets/icons/abilities/zeratul/might-of-the-nerazim.png';
            } else if (this.abilities[z].title === 'Void Prison') {
              this.abilities[z].icon = '../../assets/icons/abilities/zeratul/void-prison.png';
            }

            // UTHER [Devotion + Flash of Light + Eternal Vanguard] ICONS FIXED
            if (this.abilities[z].title === 'Devotion') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/devotion.png';
            } else if (this.abilities[z].title === 'Flash of Light') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/flash-of-light.png';
            } else if (this.abilities[z].title === 'Eternal Vanguard') {
              this.abilities[z].icon = '../../assets/icons/abilities/uther/devotion.png';
              this.abilities.splice(z, 1);
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

            // ALL HEROES [REGROUP HEROIC ABILITIES]
            if (this.abilities[z].hotkey === 'R') {

              // REGROUP IN [] IF MORE THAN ONE heroic ability
              const shapeh = {};

              this.abilities.forEach(function (a) {
                shapeh[a.hotkey] = shapeh[a.hotkey] || [];
                shapeh[a.hotkey].push({
                  cooldown: a.cooldown,
                  description: a.description
                  .replace('Quest:', '<br/><font color="#FFD700"> \u2762 Quest</font> :')
                  .replace('Reward:', '<br/><font color="#FFD700"> \u2762 Reward</font> :'),
                  hotkey: a.hotkey,
                  icon: a.icon,
                  mana_cost: a.mana_cost,
                  name: a.name,
                  owner: a.owner,
                  sort: a.sort,
                  title: a.title,
                  // tslint:disable-next-line:max-line-length
                  titleLink: a.title.replace(/[\',.!]/g, '').replace(/[ ]/g, '-').replace(/[-]/g, '').replace('MightoftheNerazim', 'MightOfTheNerazim'),
                  trait: a.trait
                });
              });

              // console.log(shapeh['R']);

                this.special = shapeh['R'];

                this.heroic = this.special;

              }



            }

            console.log(this.heroic, this.trait);

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

          // REGROUP IN [] IF MORE THAN ONE owner property FOR BEAST MODE
          const shape = {};

          this.abilities.forEach(function (a) {
              shape[a.owner] = shape[a.owner] || [];
              shape[a.owner].push({
                cooldown: a.cooldown,
                description: a.description
                .replace('Quest:', '<br/><font color="#FFD700"> \u2762 Quest</font> :')
                .replace('Reward:', '<br/><font color="#FFD700"> \u2762 Reward</font> :'),
                hotkey: a.hotkey,
                icon: a.icon,
                mana_cost: a.mana_cost,
                name: a.name,
                owner: a.owner,
                sort: a.sort,
                title: a.title,
                titleLink: a.titleLink,
                trait: a.trait
              });
            });

            // tslint:disable-next-line:forin
            for (const test in shape) {
              // console.log(test);
              this.keys.push(test);
            }

            this.basic = shape[this.keys[0]];
            this.beast = shape[this.keys[1]];

            this.testz = this.basic;

            // console.log(this.testz);

            console.log(this.basic, this.beast, this.testz, this.abilityDefault);


            // SI E1 existe alors on renvoit la donnée
            for (let i = 0; i < this.testz.length; i++) {

              if (Object.values(this.testz[i]).indexOf('E1') !== -1) {
                this.abilityDefault = this.testz[i];
                // console.log('testz E1 OK');
              }

            }


            // SI Z existe alors on renvoit la donnée
            for (let i = 0; i < this.abilities.length; i++) {

              if (Object.values(this.abilities[i]).indexOf('Z1') !== -1) {
                this.abilityMount = this.abilities[i];
                this.abilityMount.icon = './../../assets/icons/abilities/mounts/mount-special.png';
                // console.log('testz Z1 OK');
              }

            }

          console.log(this.abilityMount);

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
              } else if (this.talents[index].titleLink === 'GiftoftheXelnaga') {
                this.talents[index].titleLink = this.talents[index].titleLink
                .replace('GiftoftheXelnaga', 'GiftoftheXelNaga');
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

  enterM1(): void {
    document.getElementById('ability-infos-m1').style.opacity = '1';
    console.log('enter');
  }

  leaveM1(): void {
    document.getElementById('ability-infos-m1').style.opacity = '0';
    document.getElementById('ability-infos-m1').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterQ1(): void {
    document.getElementById('ability-infos-q1').style.opacity = '1';
    console.log('enter');
  }

  leaveQ1(): void {
    document.getElementById('ability-infos-q1').style.opacity = '0';
    document.getElementById('ability-infos-q1').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterW1(): void {
    document.getElementById('ability-infos-w1').style.opacity = '1';
    console.log('enter');
  }

  leaveW1(): void {
    document.getElementById('ability-infos-w1').style.opacity = '0';
    document.getElementById('ability-infos-w1').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterE1(): void {
    document.getElementById('ability-infos-e1').style.opacity = '1';
    console.log('enter');
  }

  leaveE1(): void {
    document.getElementById('ability-infos-e1').style.opacity = '0';
    document.getElementById('ability-infos-e1').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterS(): void {
    document.getElementById('ability-infos-s1').style.opacity = '1';
    console.log('enter');
  }

  leaveS(): void {
    document.getElementById('ability-infos-s1').style.opacity = '0';
    document.getElementById('ability-infos-s1').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterQ2(): void {
    document.getElementById('ability-infos-q2').style.opacity = '1';
    console.log('enter');
  }

  leaveQ2(): void {
    document.getElementById('ability-infos-q2').style.opacity = '0';
    document.getElementById('ability-infos-q2').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterW2(): void {
    document.getElementById('ability-infos-w2').style.opacity = '1';
    console.log('enter');
  }

  leaveW2(): void {
    document.getElementById('ability-infos-w2').style.opacity = '0';
    document.getElementById('ability-infos-w2').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterE2(): void {
    document.getElementById('ability-infos-e2').style.opacity = '1';
    console.log('enter');
  }

  leaveE2(): void {
    document.getElementById('ability-infos-e2').style.opacity = '0';
    document.getElementById('ability-infos-e2').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterR(): void {
    document.getElementById('ability-infos-r').style.opacity = '1';
    console.log('enter');
  }

  leaveR(): void {
    document.getElementById('ability-infos-r').style.opacity = '0';
    document.getElementById('ability-infos-r').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterD(): void {
    document.getElementById('ability-infos-d').style.opacity = '1';
    document.getElementById('ability-infos-d').style.left = '18%';
    console.log('enter');
  }

  leaveD(): void {
    document.getElementById('ability-infos-d').style.opacity = '0';
    document.getElementById('ability-infos-d').style.transition = 'all 0.3s ease';
    console.log('leave');
  }

  enterD2(): void {
    document.getElementById('ability-infos-d2').style.opacity = '1';
    document.getElementById('ability-infos-d2').style.left = '18%';
    console.log('enter');
  }

  leaveD2(): void {
    document.getElementById('ability-infos-d2').style.opacity = '0';
    document.getElementById('ability-infos-d2').style.transition = 'all 0.3s ease';
    console.log('leave');
  }
}
