import { Component, OnDestroy, OnInit } from '@angular/core'
import {Observable, Subscription} from 'rxjs'
import {Geoposition, GeopositionState} from "../core/geolocation/geolocation.model"
import {CityWeather, WeatherState} from "../core/openweather/openweather.model"
import {AppState} from "../app.model";
import {Store} from "@ngrx/store";

@Component({
  styleUrls: ['./map.component.css'],
  template: `
    <div class="map">
      <sebm-google-map
        [latitude]="lat"
        [longitude]="lon"
        [zoom]="zoom">
        <sebm-google-map-marker *ngFor="let marker of markers"
          [latitude]="marker.coords.latitude"
          [longitude]="marker.coords.longitude"
          [label]="marker.name"
          [iconUrl]="marker.icon"
        ></sebm-google-map-marker>
      </sebm-google-map>
    </div>
  `
})
export class MapComponent implements OnInit, OnDestroy {

  private positionSubscription: Subscription
  private forecastSubscription: Subscription

  lat: number = 0
  lon: number = 0
  zoom: number = 4
  markers: CityWeather[]

  position: Observable<Geoposition>
  forecast: Observable<CityWeather[]>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.positionSubscription = this.store.select('geoposition')
      .subscribe((geoposition: GeopositionState): void => {
        const position = geoposition.entity

        this.lat = position.coords.latitude
        this.lon = position.coords.longitude
        this.zoom = 12
      })

    this.forecastSubscription = this.store.select('forecast')
      .subscribe((forecast: WeatherState): CityWeather[] => this.markers = forecast.entities)
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe()
    this.forecastSubscription.unsubscribe()
  }
}
