import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Geoposition } from "./geolocation.model"
import { OWResponse } from "./openweather.model"

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
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<OWResponse>

  ngOnInit() {
    this.position.subscribe((position: Geoposition) => {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      this.zoom = 12
    })
  }
}
