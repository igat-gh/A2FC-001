import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Geoposition } from "../../services/geolocation/geolocation.model"
import { CityWeather } from "../../services/openweather/openweather.model"

@Component({
  selector: 'map',
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lon"
      [zoom]="zoom">
      <sebm-google-map-marker *ngFor="let marker of markers"
        [latitude]="marker.coords.latitude"
        [longitude]="marker.coords.longitude"
        [label]="marker.name"
        [iconUrl]="marker.icon"
      ></sebm-google-map-marker>
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
  markers: CityWeather[]

  @Input()
  position: Observable<Geoposition>

  @Input()
  forecast: Observable<CityWeather[]>

  ngOnInit() {
    this.position.subscribe((position: Geoposition) => {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      this.zoom = 12
    })

    this.forecast.subscribe((forecast: CityWeather[]) => this.markers = forecast)
  }
}
