export class Hero {
  title: any;
  name: string;
  short_name: string;
  attribute_id: string;
  role: string;
  type: string;
  icon_url: { '92x93': string };
  talents: [{
    'name': string;
    'title': string;
    'description': string;
    'icon': string;
    'icon_url': {
      '64x64': string;
    },
    'ability': string;
    'sort': number;
    'cooldown': any;
    'mana_cost': any;
    'level': number
  }];
  abilities: any[];
  translations: any[];
  release_date: Date;
  beast: string;
  beastName: string;
  beastDesc: string;

}
