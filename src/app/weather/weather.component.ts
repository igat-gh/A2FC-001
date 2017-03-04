import {Component, OnInit} from '@angular/core'
import {CityWeather, WeatherState} from '../core/openweather/openweather.model'
import {Store} from '@ngrx/store'
import {AppState} from '../app.model'
import {Router} from '@angular/router'
import {ViewOptions} from './weather.model'
import {AppConfig} from "../core/core.config";

@Component({
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  favoriteItem: CityWeather

  forecast: CityWeather[]

  temperatureMode: string

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private config: AppConfig
  ) { }

  ngOnInit(): void {
    this.temperatureMode = this.config.temperatureMode
    this.store.select('forecast')
      .subscribe((forecast: WeatherState): CityWeather[] => this.forecast = forecast.entities)
  }

  selectItem(cityWeather: CityWeather): void {
    this.router.navigate(['/cities', cityWeather.name])
  }

  deleteItem(item: CityWeather): void {
    this.forecast = this.forecast.filter((cityWeather: CityWeather) =>
      cityWeather.name !== item.name)
  }

  setFavoriteItem(item: CityWeather): void {
    this.favoriteItem = item
  }

  onViewOptionsChanged(options: ViewOptions): void {
    this.store.select('forecast')
      .map((forecast: WeatherState): CityWeather[] =>
        forecast.entities.filter((cityWeather: CityWeather) =>
          cityWeather.name.indexOf(options.searchCriteria) !== -1))
      .subscribe((forecast: CityWeather[]) => {
        this.forecast = forecast
        this.temperatureMode = options.temperatureMode
      })
  }
}
