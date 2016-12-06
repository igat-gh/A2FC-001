import { Component, Input } from '@angular/core'
import { IGeoposition } from "./geolocation.model"
import { ICityForecast } from "./openweather.model"

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
  position: IGeoposition

  @Input()
  forecast: ICityForecast[]
}
