import {Component, Input} from '@angular/core'
import {Observable, BehaviorSubject} from 'rxjs'
import {Geoposition} from '../core/geolocation/geolocation.model'
import {CityWeather} from "../core/openweather/openweather.model"

@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.css'],
  template: `
    <header></header>
    <loader
      [isLoading]="loading | async">
    </loader>
    <main class="main">
      <ng-content></ng-content>
    </main>
    <footer
      class="footer"
      [position]="position | async">
    </footer>
  `
})
export class LayoutComponent {

  @Input()
  loading: BehaviorSubject<boolean>

  @Input()
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<CityWeather[]>
}
