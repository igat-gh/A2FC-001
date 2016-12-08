import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { IGeoposition } from './geolocation.model'
import { IOWResponse } from './openweather.model'

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
  position: Observable<IGeoposition>

  @Input()
  forecast: Observable<IOWResponse>
}
