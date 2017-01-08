import { BrowserModule } from '@angular/platform-browser'

import { NgModule } from '@angular/core'
import { AgmCoreModule } from 'angular2-google-maps/core'

import { AppComponent } from './app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MainComponent } from './components/main/main.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { MapComponent } from './components/map/map.component'
import { LoaderComponent } from './components/shared/loader.component'
import { CityWeatherComponent } from './components/sidebar/city-weather.component'

import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius/kelvin-to-celsius.pipe'
import { TemperatureColorDirective } from './directives/temperature-color/temperature-color.directive'

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ BrowserModule, AgmCoreModule.forRoot() ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    MapComponent,
    LoaderComponent,
    CityWeatherComponent,
    KelvinToCelsiusPipe,
    TemperatureColorDirective
  ]
})
export class AppModule {}
