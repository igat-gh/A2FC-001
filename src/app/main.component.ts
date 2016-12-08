import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Geoposition } from './geolocation.model'
import { OWResponse } from './openweather.model'

@Component({
  selector: 'main',
  template: `
    <div class="main">
      <sidebar [forecast]="forecast"> </sidebar>
      <map [forecast]="forecast" [position]="position" class="map"></map>
    </div>
  `
})
export class MainComponent {
  @Input()
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<OWResponse>
}
