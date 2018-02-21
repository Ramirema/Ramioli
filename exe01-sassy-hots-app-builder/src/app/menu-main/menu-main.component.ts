// CONTROLLER
// --------------------
// MAIN
import { Component, OnInit } from '@angular/core';
// MODEL -- TYPES
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})

export class MenuMainComponent implements OnInit {

  selectedMenu: Menu;

  menus: Menu[] = [

    { link: '/', name: 'Home' },
    { link: '/heroes', name: 'Heroes' },
    { link: '/builds', name: 'Builds' },
    { link: '/contact', name: 'Contact' }

  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

}
