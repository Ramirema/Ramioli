import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Valla',
        avatar: 'http://www.heroesbuilder.com/images/heros/302_portrait_varian.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
       },
      {
        id: 12,
        name: 'Jaina',
        avatar: 'http://www.heroesbuilder.com/images/heros/51_portrait_jaina.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
       },
      {
        id: 13,
        name: 'Malthael',
        avatar: 'http://www.heroesbuilder.com/images/heros/311_portrait_malthael.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
      },
      {
        id: 14,
        name: 'Junkrat',
        avatar: 'http://www.heroesbuilder.com/images/heros/316_portrait_chacal.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
      },
      {
        id: 15,
        name: 'Varian',
        avatar: 'http://www.heroesbuilder.com/images/heros/302_portrait_varian.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
      },
      {
        id: 16,
        name: 'Leoric',
        avatar: 'http://www.heroesbuilder.com/images/heros/121_portrait_leoric.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
      },
      {
        id: 17,
        name: 'Lucio',
        avatar: 'http://www.heroesbuilder.com/images/heros/302_portrait_varian.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
       },
      {
        id: 18,
        name: 'Hanzo',
        avatar: 'http://www.heroesbuilder.com/images/heros/318_portrait_hanzo.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
       },
      {
        id: 19,
        name: 'Zeratul',
        avatar: 'http://www.heroesbuilder.com/images/heros/302_portrait_varian.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
        },
      {
        id: 20,
        name: 'Zul-Jin',
        avatar: 'http://www.heroesbuilder.com/images/heros/302_portrait_varian.jpg',
        category: 'Assassin',
        gold: 10000,
        gems: 250,
        atk_dmg: 94,
        atk_speed: 1.25,
        atk_range: 1.2
      }

    ];
    return {heroes};
  }
}
