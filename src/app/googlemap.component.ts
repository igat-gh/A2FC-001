import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
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
  `,
  styles: [`
    .sebm-google-map-container {
      height: 100%;
      width: 100%;
    }
  `]
})
export class MapComponent implements OnInit {
  lat: number = 0
  lon: number = 0
  zoom: number = 4

  @Input()
  position: Observable<IGeoposition>

  @Input()
  forecast: Observable<IOWResponse>

  ngOnInit() {
    this.position.subscribe((position: IGeoposition) => {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      this.zoom = 12
    })
  }
}
