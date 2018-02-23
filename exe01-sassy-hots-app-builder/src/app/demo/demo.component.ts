import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-demo',
  template: `
  <h1>Angular 5 HttpClient Demo App</h1>
  <h2>Heroez</h2>
  <ul>
    <li *ngFor="let hero of heroez">{{ hero }}</li>
  </ul>
  `
})

export class DemoComponent implements OnInit {

  public heroez;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getHeroName();
  }

  getHeroName(): void {
      this._demoService.getHeroez()
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
          return this.heroez = heroName;
        },
        err => console.error(err),
        () => console.log('done loading heroez')
        // No error or completion callbacks here. They are optional, but
        // you will get console errors if the Observable is in an error state.
      );
    }

}

