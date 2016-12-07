import { Component, Input } from '@angular/core'
import { IGeoposition } from './geolocation.model'
import { IOWResponse } from "./openweather.model"

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <div *ngIf="isLoading" class="load-bar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <main
      [position]="position"
      [forecast]="forecast">  
    </main>
    <footer
      [position]="position">
    </footer>
  `
})
export class LayoutComponent {

  @Input()
  isLoading: boolean

  @Input()
  position: Promise<IGeoposition>

  @Input()
  forecast: Promise<IOWResponse>
}
