import { Component, OnInit } from '@angular/core'
import { GeolocationService } from './geolocation.service'
import { OpenWeatherService } from './openweather.service'
// import { GoogleMapService } from './googlemap.service'

import { IGeoposition } from "./geolocation.model"
import { ICityForecast, IOWResponse, ICitiesInCycleOptions } from "./openweather.model"

import { geoposotionToOWCoords } from './app.helpers'

import 'app/app.component.css'

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <layout
        [isLoading]="isLoading"
        [position]="position"
        [forecast]="forecast">
      </layout>
    </div>
  `,
  providers: [
    // GoogleMapService,
    // GeolocationService,
    // OpenWeatherService
  ]
})
export class AppComponent implements OnInit {

  isLoading: boolean = true

  map: google.maps.Map
  position: IGeoposition
  forecast: ICityForecast[]

  // googlemapService: GoogleMapService
  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor(
    // private googlemapService: GoogleMapService
    // private geolocationService: GeolocationService,
    // private openWeatherService: OpenWeatherService
  ) {
    // this.googlemapService = new GoogleMapService()
    this.geolocationService = new GeolocationService()
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
  }

  getGeopisition(): Promise<IGeoposition> {
    return this.geolocationService.getCurrentPosition()
      .then(position => this.position = position)
  }

  getForecast(coords: ICitiesInCycleOptions): Promise<ICityForecast[]> {
    return this.openWeatherService.getWeatherForCitiesInCycle(coords)
      .then((data: IOWResponse) => this.forecast = data.list)
  }

  // getMap(): Promise<google.maps.Map> {
  //   return this.googlemapService.getMap().then(map => this.map = map)
  // }

  ngOnInit(): void {
    this.getGeopisition()
      .then(geoposotionToOWCoords)
      .then(this.getForecast.bind(this))
      .then(() => {
        this.isLoading = false
        // console.log(this.position, this.forecast)
      })
  }
}
