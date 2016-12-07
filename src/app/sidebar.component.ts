import { Component, Input, OnInit } from '@angular/core'
import { OpenWeatherService } from './openweather.service'
import { IOWResponse, ICityWeather } from './openweather.model'

@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      <ul class="list-group" id="cities-list">
        <li *ngFor="let cityWeather of weather" class="list-group-item">
          <span class="badge">{{getTemperature(cityWeather) | kelvinToCelsius: "formatted"}}</span>
          <img width="25" height="25" src="{{getIconURL(cityWeather)}}"/>
          <span>{{getCityName(cityWeather)}}</span>
        </li>
      </ul>
    </div>
  `
})
export class SidebarComponent implements OnInit {
  weather: ICityWeather[]

  @Input()
  forecast: Promise<IOWResponse>

  ngOnInit() {
    this.forecast.then((forecast: IOWResponse) =>
      this.weather = forecast.list)
  }

  getCityName(cityWeather: ICityWeather): string | undefined {
    return cityWeather && cityWeather.name
  }

  getTemperature(cityWeather: ICityWeather): number | undefined {
    return cityWeather && cityWeather.main.temp
  }

  getIconURL(cityWeather: ICityWeather): string {
    return OpenWeatherService.buildIconURL(cityWeather)
  }
}
