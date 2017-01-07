import { Component, OnInit, NgZone } from '@angular/core'
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
      </layout>
    </div>
  `,
  providers: []
})
export class AppComponent implements OnInit {

  isLoading: boolean

  position: Observable<Geoposition>
  forecast: Observable<OWResponse>

  geolocationService: GeolocationService
  openWeatherService: OpenWeatherService

  constructor(private zone: NgZone) {
    this.openWeatherService = new OpenWeatherService('ddb1f0abb0c8107ef81e20d834d797a2')
    this.geolocationService = new GeolocationService()
  }

  getGeoPosition(): Observable<Geoposition> {
    return Observable.from(this.geolocationService.getCurrentPosition())
  }

  getForecast(coords: CitiesInCycleOptions): Observable<CityWeather[]> {
    return Observable.from(this.openWeatherService.getWeatherForCitiesInCycle(coords))
  }

  fetchData(): Observable<[Geoposition, OWResponse]> {
    this.position = this.getGeoPosition()
    this.forecast = this.position
      .map(geoposotionToOWCoords)
      .flatMap(this.getForecast.bind(this))

    return Observable.zip(this.position, this.forecast)
  }

  ngOnInit(): void {
    this.zone.onUnstable.subscribe(() => console.time('stabilization took: '))
    this.zone.onStable.subscribe(() => console.timeEnd('stabilization took: '))

    this.isLoading = true

    this.fetchData().subscribe(() => this.isLoading = false)

    Observable.interval(5000).subscribe(this.fetchData.bind(this))
  }
}
