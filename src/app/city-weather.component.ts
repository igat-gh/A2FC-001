import { Component, Input } from '@angular/core'

@Component({
  selector: 'city-weather',
  template: `
    <li class="list-group-item">
      <span class="badge">{{temperature | kelvinToCelsius: "formatted"}}</span>
      <img width="25" height="25" src="{{iconURL}}"/>
      <span>{{cityName}}</span>
    </li>
  `
})
export class CityWeatherComponent {
  @Input()
  cityName: string

  @Input()
  temperature: number

  @Input()
  iconURL: string
}
