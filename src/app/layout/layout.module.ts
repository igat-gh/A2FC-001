import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { WeatherModule } from '../weather/weather.module'
import { MapModule } from '../map/map.module'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'
import { MainComponent } from './main.component'

@NgModule({
  imports: [
    SharedModule,
    WeatherModule,
    MapModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent
  ],
  exports: [
    LayoutComponent,
    MainComponent
  ]
})
export class LayoutModule {}
