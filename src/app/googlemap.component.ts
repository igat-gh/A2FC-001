///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, Input, OnInit } from '@angular/core'
import { IGeoposition } from "./geolocation.model"
import { ICityForecast } from "./openweather.model"

@Component({
  selector: 'map',
  template: `
    <div id="map"></div>
  `
})
export class MapComponent implements OnInit {

  @Input()
  position: IGeoposition

  @Input()
  forecast: ICityForecast[]

  map: google.maps.Map

  ngOnInit(): void {
    const el: Element = document.getElementById('map')
    const options: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 }, zoom: 4
    }
    this.map = new google.maps.Map(el, options)
  }

}
