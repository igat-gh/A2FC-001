import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CityWeather } from '../../services/openweather/openweather.model'

@Component({
  selector: 'city-weather',
  template: `
    <li class="list-group-item">
      <div>
        <span class="badge">{{weather.temp | kelvinToCelsius: "formatted"}}</span>
        <img width="25" height="25" src="{{weather.icon}}"/>
        <span>{{weather.name}}</span>
        
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
