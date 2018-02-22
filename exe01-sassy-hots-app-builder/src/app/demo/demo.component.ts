import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo',
  template: `
  <h1>Angular 5 HttpClient Demo App</h1>
  <h2>Foods</h2>
  <ul>
    <li *ngFor="let food of foods">{{food.id + ' - ' + food.title}}</li>
  </ul>
  <h2>Heroez</h2>
  <ul>
    <li *ngFor="let hero of heroez">{{hero.name}}</li>
  </ul>
  `
})

export class DemoComponent implements OnInit {

  public foods;
  public heroez;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getHeroez();
    this.getFoods();
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      data => { this.foods = data; },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  getHeroez() {
      this._demoService.getHeroez().subscribe(
        data => { this.heroez = data; },
        err => console.error(err),
        () => console.log('done loading heroez')
        // No error or completion callbacks here. They are optional, but
        // you will get console errors if the Observable is in an error state.
      );
    }

}

