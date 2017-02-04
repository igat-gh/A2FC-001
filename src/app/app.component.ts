import { Component, OnInit } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { Store } from '@ngrx/store'

import { AppState } from './app.model'

import { GeolocationService } from './core/geolocation/geolocation.service'
import { OpenWeatherService } from './core/openweather/openweather.service'
import { LoggerService } from './core/logger/logger.service'

import { Geoposition } from "./core/geolocation/geolocation.model"
import { OWResponse, CitiesInCycleOptions, CityWeather } from "./core/openweather/openweather.model"

import { geoposotionToOWCoords } from './app.helpers'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="app">
      <layout
        [loading]="loading"
        [position]="position"
        [forecast]="forecast">
        <main
          [position]="position"
          [forecast]="forecast">
        </main>
      </layout>
    </div>
  `
})
export class AppComponent implements OnInit {

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false)

  position: Observable<Geoposition>
  forecast: Observable<OWResponse>

  constructor(
    private geolocationService: GeolocationService,
    private openWeatherService: OpenWeatherService,
    private loggerService: LoggerService,
    private store: Store<AppState>
  ) {
    this.loading.subscribe((isLoading: boolean): void => {
      this.loggerService.log(`Loading: ${isLoading}`)})
  }

  ngOnInit(): void {
    this.loading.next(true)

    const data: Observable<[Geoposition, OWResponse]> = this.loadAppData()

    data.subscribe(([position, forecast]): void => {
      this.loading.next(false)

      console.log('Position: ', position)
      console.log('Forecast: ', forecast)
    })

    this.store.dispatch({ type: '[GEOPOSITION] Request' })
    this.store.select('weather').subscribe((c) => console.log(c))
  }

  getGeoPosition(): Observable<Geoposition> {
    return Observable.from(this.geolocationService.loadCurrentPosition())
  }

  getForecast(coords: CitiesInCycleOptions): Observable<CityWeather[]> {
    return this.openWeatherService.loadWeatherForCitiesInCycle(coords)
  }

  loadAppData(): Observable<[Geoposition, OWResponse]> {
    this.position = this.getGeoPosition()
    this.forecast = this.position
      .map(geoposotionToOWCoords)
      .flatMap(this.getForecast.bind(this))

    return Observable.combineLatest([this.position, this.forecast])
  }
}
