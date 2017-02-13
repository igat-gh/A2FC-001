import { Routes } from '@angular/router'
import { MapComponent } from '../map/map.component'
import { PageNotFoundComponent } from '../layout/page-not-found.component'

export const coreRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
