import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import {ViewOptions} from "./weather.model";

@Component({
  selector: 'weather-view-options',
  styleUrls: ['weather-view-options.component.css'],
  templateUrl: 'weather-view-options.component.html'
})
export class WeatherViewOptionsComponent implements OnInit {

  public temperatureModes = ['C', 'K']
  public selectedMode: string
  public searchCriteria: string

  @Output()
  settingsChanged: EventEmitter<ViewOptions>  = new EventEmitter()

  @Input()
  options: ViewOptions

  constructor() {
  }

  onSettingsChanged(): void {
    this.settingsChanged.emit({
      temperatureMode: this.selectedMode,
      searchCriteria: this.searchCriteria
    })
  }

  ngOnInit() {
    this.selectedMode = this.options.temperatureMode
    this.searchCriteria = ''
  }
}
