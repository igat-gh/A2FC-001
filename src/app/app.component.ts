import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { Observable } from 'rxjs'
import { GeolocationService } from './services/geolocation/geolocation.service'
import { OpenWeatherService } from './services/openweather/openweather.service'

import { Geoposition } from "./services/geolocation/geolocation.model"
import { OWResponse, CitiesInCycleOptions, CityWeather } from "./services/openweather/openweather.model"

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
        <main
          [position]="position"
          [forecast]="forecast">  
        </main>
      </layout>
    </div>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isLoading: boolean

  position: Observable<Geoposition>
  forecast: Observable<OWResponse>

  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor(
    private cd: ChangeDetectorRef
  ) {
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
    this.geolocationService = new GeolocationService()
  }

  ngOnInit(): void {
    this.isLoading = true

    this.loadAppData().subscribe(() => this.isLoading = false)
  }

  getGeoPosition(): Observable<Geoposition> {
    return Observable.from(this.geolocationService.getCurrentPosition())
  }

  getForecast(coords: CitiesInCycleOptions): Observable<CityWeather[]> {
    return Observable.from(this.openWeatherService.getWeatherForCitiesInCycle(coords))
  }

  loadAppData(): Observable<[Geoposition, OWResponse]> {
    this.position = this.getGeoPosition()
    this.forecast = this.position
      .map(geoposotionToOWCoords)
      .flatMap(this.getForecast.bind(this))

    this.cd.markForCheck()
    return Observable.zip(this.position, this.forecast)
  }
}
