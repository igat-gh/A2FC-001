///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, Input } from '@angular/core'
import { IGeoposition } from "./geolocation.model"
import { ICityForecast } from "./openweather.model"

@Component({
  selector: 'map',
  template: `
    <sebm-google-map
      [latitude]="0"
      [longitude]="0"
      [zoom]="4">
    </sebm-google-map>
  `
})
export class MapComponent {
  @Input()
  position: IGeoposition

  @Input()
  forecast: ICityForecast[]

}
