import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { OpenWeatherService } from './openweather.service'
import { OWResponse, CityWeather } from './openweather.model'

@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      <ul class="list-group" id="cities-list">
        <city-weather *ngFor="let cityWeather of weather"
          [cityName]="cityWeather.name"
          [temperature]="cityWeather.main.temp"
          [iconURL]="getIconURL(cityWeather)">
        </city-weather>
      </ul>
    </div>
  `
})
export class SidebarComponent implements OnInit {
  weather: CityWeather[]

  @Input()
  forecast: Observable<OWResponse>

  ngOnInit() {
    this.forecast.subscribe((forecast: OWResponse) =>
      this.weather = forecast.list)
  }

  getIconURL(cityWeather: CityWeather): string {
    return OpenWeatherService.buildIconURL(cityWeather)
  }
}
