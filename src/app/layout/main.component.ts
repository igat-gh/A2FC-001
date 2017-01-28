import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Geoposition } from '../core/services/geolocation/geolocation.model'
import { CityWeather } from '../core/services/openweather/openweather.model'

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  template: `
    <div class="main">
      <sidebar [forecast]="forecast | async"> </sidebar>
      <map [forecast]="forecast" [position]="position" class="map"></map>
    </div>
  `
})
export class MainComponent {
  @Input()
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<CityWeather[]>
}
