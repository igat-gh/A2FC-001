import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { GeolocationService } from './geolocation.service'
import { OpenWeatherService } from './openweather.service'

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

  position: Observable<IGeoposition>
  forecast: Observable<IOWResponse>

  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor() {
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
    this.geolocationService = new GeolocationService()
  }

  getGeoPosition(): Observable<IGeoposition> {
    return Observable.from(this.geolocationService.getCurrentPosition())
  }

  getForecast(coords: ICitiesInCycleOptions): Observable<IOWResponse> {
    return Observable.from(this.openWeatherService.getWeatherForCitiesInCycle(coords))
  }

  ngOnInit(): void {
    this.isLoading = true

    this.position = this.getGeoPosition()
    this.forecast = this.position
      .map(geoposotionToOWCoords)
      .flatMap(this.getForecast.bind(this))

    Observable.zip(
      this.position, this.forecast
    ).subscribe(([ position, forecast ]) => {
      this.isLoading = false
      console.clear()
      console.info('position: ', position)
      console.info('forecast: ', forecast)
    })
  }
}
