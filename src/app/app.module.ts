import { BrowserModule } from '@angular/platform-browser'

import { NgModule } from '@angular/core'
import { AgmCoreModule } from 'angular2-google-maps/core'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { MapComponent } from './map/map.component'
import { LoaderComponent } from './shared/loader.component'
import { CityWeatherComponent } from './sidebar/city-weather.component'

import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe'

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
    KelvinToCelsiusPipe
  ]
})
export class AppModule {}
