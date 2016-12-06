///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import { Component, Input } from '@angular/core'
import { IGeoposition } from "./geolocation.model"
import { ICityForecast } from "./openweather.model"

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <div *ngIf="isLoading" class="load-bar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <main *ngIf="!isLoading"
      [position]="position"
      [forecast]="forecast">  
    </main>
    <footer></footer>
  `
})
export class LayoutComponent {

  @Input()
  isLoading: boolean

  @Input()
  position: IGeoposition

  @Input()
  forecast: ICityForecast[]
}
