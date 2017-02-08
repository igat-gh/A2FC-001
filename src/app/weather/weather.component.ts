import { Component, OnInit, OnDestroy } from '@angular/core'
import {CityWeather, WeatherState} from '../core/openweather/openweather.model'
import {Store} from "@ngrx/store";
import {AppState} from "../app.model";
import { Subscription } from "rxjs";

@Component({
  styleUrls: ['./weather.component.css'],
  template: `
    <div class="sidebar">
      <ul class="list-group" id="cities-list">
        <city-weather *ngFor="let cityWeather of forecast"
          (onDelete)="deleteItem($event)"
          (onFavorite)="setFavoriteItem($event)"
          [weather]="cityWeather"
          [favorite]="favoriteItem && favoriteItem.name === cityWeather.name">
        </city-weather>
      </ul>
    </div>
  `
})
export class WeatherComponent implements OnInit, OnDestroy {

  forecastSubscription: Subscription

  favoriteItem: CityWeather

  forecast: CityWeather[]

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.forecastSubscription = this.store.select('forecast')
      .subscribe((forecast: WeatherState): CityWeather[] => this.forecast = forecast.entities)
  }

  ngOnDestroy(): void {
    this.forecastSubscription.unsubscribe()
  }

  deleteItem(item: CityWeather): void {
    this.forecast = this.forecast.filter(cityWeather => cityWeather.name !== item.name)
  }

  setFavoriteItem(item: CityWeather): void {
    this.favoriteItem = item
  }
}
