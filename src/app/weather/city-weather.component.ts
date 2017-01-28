import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CityWeather } from '../core/services/openweather/openweather.model'

@Component({
  selector: 'city-weather',
  styleUrls: ['./city-weather.component.css'],
  template: `
    <li class="list-group-item city-weather">
      <div class="weather-main-layer">
        <span class="badge" [temperatureColor]="weather.temp">{{weather.temp | kelvinToCelsius: "formatted"}}</span>
        <img width="25" height="25" src="{{weather.icon}}"/>
        <span>{{weather.name}}</span>
        <wind [speed]="weather.wind.speed" [direction]="weather.wind.deg"></wind>
      </div>
      
      <div class="weather-options-layer">
        <button type="button" class="btn btn-xs pull-right" (click)="handleDeleteClick()">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
        <button type="button" class="btn btn-xs pull-right" (click)="handleFavoriteClick()">
          <span [ngClass]="{'glyphicon-star-empty': !favorite, 'glyphicon-star': favorite, 'glyphicon': true}"></span>
        </button>
      </div>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherComponent {
  @Input()
  weather: CityWeather

  @Input()
  favorite: boolean

  @Output()
  onDelete: EventEmitter<CityWeather> = new EventEmitter()

  @Output()
  onFavorite: EventEmitter<CityWeather> = new EventEmitter()

  handleDeleteClick(): void {
    this.onDelete.emit(this.weather)
  }

  handleFavoriteClick(): void {
    this.onFavorite.emit(this.weather)
  }
}
