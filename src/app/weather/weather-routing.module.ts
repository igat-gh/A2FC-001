import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WeatherComponent } from './weather.component'
import { CityWeatherDetailsComponent } from './city-weather-details.component'

const weatherRoutes: Routes = [
  { path: 'cities', component: WeatherComponent },
  { path: 'cities/:cityName', component: CityWeatherDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(weatherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WeatherRoutingModule { }
