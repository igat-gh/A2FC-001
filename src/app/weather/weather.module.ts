import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { WeatherComponent } from './weather.component'
import { CityWeatherComponent } from './city-weather.component'
import { WindComponent } from './wind.component';
import { CityWeatherDetailsComponent } from './city-weather-details.component';
import { WeatherRoutingModule } from './weather-routing.module'

@NgModule({
  imports: [
    SharedModule,
    WeatherRoutingModule
  ],
  declarations: [
    WindComponent,
    WeatherComponent,
    CityWeatherComponent,
    CityWeatherDetailsComponent,
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
