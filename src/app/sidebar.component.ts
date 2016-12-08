import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { OpenWeatherService } from './openweather.service'
import { IOWResponse, ICityWeather } from './openweather.model'

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
  weather: ICityWeather[]

  @Input()
  forecast: Observable<IOWResponse>

  ngOnInit() {
    this.forecast.subscribe((forecast: IOWResponse) =>
      this.weather = forecast.list)
  }

  getIconURL(cityWeather: ICityWeather): string {
    return OpenWeatherService.buildIconURL(cityWeather)
  }
}
