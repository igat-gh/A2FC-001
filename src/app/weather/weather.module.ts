import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { WeatherComponent } from './weather.component'
import { CityWeatherComponent } from './city-weather.component'
import { WindComponent } from './wind.component'

@NgModule({
  imports: [SharedModule],
  declarations: [
    WindComponent,
    WeatherComponent,
    CityWeatherComponent
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
