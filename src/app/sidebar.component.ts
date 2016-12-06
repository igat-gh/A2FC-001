import { Component, Input } from '@angular/core'
import { OpenWeatherService } from './openweather.service'
import { ICityForecast } from "./openweather.model"

@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      <ul class="list-group" id="cities-list">
        <li *ngFor="let item of forecast" class="list-group-item">
          <span class="badge">{{item.main.temp}}</span>
          <img width="25" height="25" src="{{getIconURL(item)}}"/>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  `
})
export class SidebarComponent {

  @Input()
  forecast: ICityForecast[]

  getIconURL(item: ICityForecast): string {
    return OpenWeatherService.buildIconURL(item)
  }
}