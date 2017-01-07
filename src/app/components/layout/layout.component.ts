import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Geoposition } from '../../services/geolocation/geolocation.model'
import { CityWeather } from "../../services/openweather/openweather.model"

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <loader
      [isLoading]="isLoading">
    </loader>
    <ng-content></ng-content>
    <footer
      [position]="position | async">
    </footer>
  `
})
export class LayoutComponent {

  @Input()
  isLoading: boolean

  @Input()
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<CityWeather[]>
}
