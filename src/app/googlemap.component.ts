import { Component, Input, OnInit } from '@angular/core'
import { IGeoposition } from "./geolocation.model"
import { IOWResponse } from "./openweather.model"

@Component({
  selector: 'map',
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lon"
      [zoom]="zoom">
    </sebm-google-map>
  `
})
export class MapComponent implements OnInit {
  lat: number = 0
  lon: number = 0
  zoom: number = 4

  @Input()
  position: Promise<IGeoposition>

  @Input()
  forecast: Promise<IOWResponse>

  ngOnInit() {
    this.position.then((position: IGeoposition) => {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      this.zoom = 12
    })
  }
}
