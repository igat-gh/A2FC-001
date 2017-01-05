import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CityWeather } from '../../services/openweather/openweather.model'

@Component({
  selector: 'city-weather',
  template: `
    <li class="list-group-item city-weather">
      <div class="weather-main-layer">
        <span class="badge">{{weather.temp | kelvinToCelsius: "formatted"}}</span>
        <img width="25" height="25" src="{{weather.icon}}"/>
        <span>{{weather.name}}</span>
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
  styles: [`
    .city-weather {
      position: relative;
    }
    .weather-main-layer {}
    .weather-options-layer {
      display: none;
    }
    .city-weather:hover .weather-options-layer {
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.7);
    }
  `],
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
