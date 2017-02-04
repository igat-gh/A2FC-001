import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { CityWeather } from '../core/openweather/openweather.model'

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.css'],
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  favoriteItem: CityWeather

  @Input()
  forecast: CityWeather[]

  deleteItem(item: CityWeather): void {
    this.forecast = this.forecast.filter(cityWeather => cityWeather.name !== item.name)
  }

  setFavoriteItem(item: CityWeather): void {
    this.favoriteItem = item
  }
}
