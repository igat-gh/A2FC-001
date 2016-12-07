import { Component, OnInit } from '@angular/core'
import { GeolocationService } from './geolocation.service'
import { OpenWeatherService } from './openweather.service'
// import { GoogleMapService } from './googlemap.service'

import { IGeoposition } from "./geolocation.model"
import { ICityWeather, IOWResponse, ICitiesInCycleOptions } from "./openweather.model"

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
  providers: []
})
export class AppComponent implements OnInit {

  isLoading: boolean

  position: Promise<IGeoposition>
  forecast: Promise<IOWResponse>

  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor() {
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
    this.geolocationService = new GeolocationService()
  }

  getGeoPosition(): Promise<IGeoposition> {
    return this.geolocationService.getCurrentPosition()
  }

  getForecast(coords: ICitiesInCycleOptions): Promise<IOWResponse> {
    return this.openWeatherService.getWeatherForCitiesInCycle(coords)
  }

  ngOnInit(): void {
    this.isLoading = true

    this.position = this.getGeoPosition()
    this.forecast = this.position
      .then(geoposotionToOWCoords)
      .then(this.getForecast.bind(this))

    Promise.all([ this.position, this.forecast ])
      .then((data: [IGeoposition, IOWResponse]) => {
        this.isLoading = false

        console.info('position: ', data[0])
        console.info('forecast: ', data[1])

        console.log(JSON.stringify(data[1]))
      })
  }
}
