import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { SidebarComponent } from './sidebar.component'
import { CityWeatherComponent } from './city-weather.component'
import { WindComponent } from './wind.component'

@NgModule({
  imports: [SharedModule],
  declarations: [
    WindComponent,
    SidebarComponent,
    CityWeatherComponent
  ],
  exports: [SidebarComponent]
})
export class WeatherModule { }
