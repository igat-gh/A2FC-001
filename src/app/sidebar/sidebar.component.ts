import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CityWeather } from '../openweather.model'

@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      <ul class="list-group" id="cities-list">
        <city-weather *ngFor="let cityWeather of weather"
          (onDelete)="deleteItem($event)"
          (onFavorite)="setFavoriteItem($event)"
          [weather]="cityWeather"
          [favorite]="favoriteItem && favoriteItem.name === cityWeather.name">
        </city-weather>
      </ul>
    </div>
  `
})
export class SidebarComponent implements OnInit {
  weather: CityWeather[]

  favoriteItem: CityWeather

  @Input()
  forecast: Observable<CityWeather[]>

  deleteItem(item: CityWeather): void {
    this.weather = this.weather.filter(cityWeather => cityWeather.name !== item.name)
  }

  setFavoriteItem(item: CityWeather): void {
    this.favoriteItem = item
  }

  ngOnInit(): void {
    this.forecast.subscribe((forecast: CityWeather[]) =>
      this.weather = forecast)
  }
}
