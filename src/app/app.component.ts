import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable, BehaviorSubject, Scheduler } from 'rxjs'
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
        [loading]="loading"
        [position]="position"
        [forecast]="forecast">
        <main
          [position]="position"
          [forecast]="forecast">
        </main>
      </layout>
    </div>
  `,
  providers: []
})
export class AppComponent implements OnInit {

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false)

  position: Observable<Geoposition>
  forecast: Observable<OWResponse>

  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor() {
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
    this.geolocationService = new GeolocationService()

    this.loading.subscribe((isLoading: boolean): void => {
      console.log('Loading: %s', isLoading)
    })
  }

  ngOnInit(): void {
    this.loading.next(true)

    const data: Observable<[Geoposition, OWResponse]> = this.loadAppData().observeOn(Scheduler.async)

    console.log('Before subscribe')
    data.subscribe(([position, forecast]): void => {
      this.loading.next(false)

      console.log('Position: ', position)
      console.log('Forecast: ', forecast)
    })
    console.log('After subscribe')
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

    return Observable.zip(this.position, this.forecast)
  }
}
