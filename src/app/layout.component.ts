import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { IGeoposition } from './geolocation.model'
import { IOWResponse } from "./openweather.model"

@Component({
  selector: 'layout',
  template: `
    <header></header>
    <loader
      [isLoading]="isLoading">
    </loader>
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
  position: Observable<IGeoposition>

  @Input()
  forecast: Observable<IOWResponse>
}
