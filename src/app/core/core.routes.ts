import { Routes } from '@angular/router'
import { WeatherComponent } from '../weather/weather.component'
import { MapComponent } from '../map/map.component'
import { PageNotFoundComponent } from '../layout/page-not-found.component'

export const coreRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
