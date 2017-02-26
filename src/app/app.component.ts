import { Component, OnInit } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { Store } from '@ngrx/store'

import { AppState } from './app.model'

import { GeolocationService } from './core/geolocation/geolocation.service'
import { OpenWeatherService } from './core/openweather/openweather.service'
import { LoggerService } from './core/logger/logger.service'

import { Geoposition, GeopositionState } from './core/geolocation/geolocation.model'
import { CitiesInCycleOptions, CityWeather, WeatherState } from './core/openweather/openweather.model'

import { geoposotionToOWCoords } from './core/core.helpers'
import { GeopositionActions } from './core/geolocation/geolocation.actions'
import { OpenWeatherActions } from './core/openweather/openweather.actions'

@Component({
  selector: 'app-root',
  styleUrls: [
    '~@angular/material/core/theming/prebuilt/deeppurple-amber.css',
    // './app.component.css'
  ],
  template: `
    <div class='app'>
      <layout
        [loading]='loading'
        [position]='position'
        [forecast]='forecast'>
       <router-outlet></router-outlet>
      </layout>
    </div>
  `
})
export class AppComponent implements OnInit {

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false)

  position: Observable<Geoposition>
  forecast: Observable<CityWeather[]>

  constructor(
    private geolocationService: GeolocationService,
    private openWeatherService: OpenWeatherService,
    private geolocationActions: GeopositionActions,
    private openWeatherActions: OpenWeatherActions,
    private loggerService: LoggerService,
    private store: Store<AppState>
  ) {
      this.position = this.store.select('geoposition')
        .map((geoposition: GeopositionState): Geoposition => geoposition.entity)

      this.forecast = this.store.select('forecast')
        .map((forecast: WeatherState): CityWeather[] => forecast.entities)
  }

  ngOnInit(): void {
    this.loading.next(true)

    this.loadAppData().subscribe(() => this.loading.next(false))

    this.loading.subscribe((isLoading: boolean): void =>
      this.loggerService.log(`Loading: ${isLoading}`))
  }

  loadGeoPosition(): Observable<Geoposition> {
    this.store.dispatch(this.geolocationActions.getGeoposition())
    return Observable.from(this.geolocationService.getCurrentPosition())
  }

  loadForecast(coords: CitiesInCycleOptions): Observable<CityWeather[]> {
    this.store.dispatch(this.openWeatherActions.loadForecast())
    return this.openWeatherService.loadWeatherForCitiesInCycle(coords)
  }

  loadAppData(): Observable<[CityWeather[], Geoposition]> {

    const position = this.loadGeoPosition()
      .do((position: Geoposition) => this.store.dispatch(this.geolocationActions.getGeopositionSuccess(position)))

    const forecast = position
      .map(geoposotionToOWCoords)
      .switchMap(this.loadForecast.bind(this))
      .do((forecast: CityWeather[]) => this.store.dispatch(this.openWeatherActions.loadForecastSuccess(forecast)))

    return Observable.combineLatest(forecast, position)
  }
}
