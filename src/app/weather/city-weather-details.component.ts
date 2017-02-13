import { Component, OnInit, Input } from '@angular/core';
import {CityWeather, WeatherState} from "../core/openweather/openweather.model";
import {Store} from "@ngrx/store";
import {AppState} from "../app.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-city-weather-details',
  templateUrl: 'city-weather-details.component.html',
  styleUrls: ['city-weather-details.component.css']
})
export class CityWeatherDetailsComponent implements OnInit {

  @Input()
  cityName: string

  details: CityWeather

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.store.select('forecast')
        .map((forecast: WeatherState) =>
          forecast.entities.find((weather: CityWeather) => weather.name === params['cityName'])))
      .subscribe((details: CityWeather) => { console.log(details); this.details = details })
  }

}
