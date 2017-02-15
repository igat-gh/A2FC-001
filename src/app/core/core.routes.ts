import { Routes } from '@angular/router'
import { PageNotFoundComponent } from '../layout/page-not-found.component'

export const coreRoutes: Routes = [
  { path: 'map', loadChildren: 'app/map/map.module#MapModule' },
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
