import { NgModule } from '@angular/core'
import { RouterModule }  from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { WeatherModule } from '../weather/weather.module'
import { MapModule } from '../map/map.module'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'
import { MainComponent } from './main.component'
import { PageNotFoundComponent } from './page-not-found.component'

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    WeatherModule,
    MapModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  exports: [
    LayoutComponent,
    MainComponent
  ]
})
export class LayoutModule {}
