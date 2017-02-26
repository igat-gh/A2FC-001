import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { CityWeather } from '../core/openweather/openweather.model'

@Component({
  selector: 'city-weather',
  styleUrls: ['./city-weather.component.css'],
  templateUrl: 'city-weather.component.html',
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

  @Output()
  onDetailsClick: EventEmitter<CityWeather> = new EventEmitter()

  handleDeleteClick(): void {
    this.onDelete.emit(this.weather)
  }

  handleFavoriteClick(): void {
    this.onFavorite.emit(this.weather)
  }

  handleDetailsClick(): void {
    this.onDetailsClick.emit(this.weather)
  }
}
