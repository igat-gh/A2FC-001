import { BrowserModule } from '@angular/platform-browser'

import { NgModule } from '@angular/core'
import { AgmCoreModule } from 'angular2-google-maps/core'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'
import { MainComponent } from './main.component'
import { SidebarComponent } from './sidebar.component'
import { MapComponent } from './googlemap.component'

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
    KelvinToCelsiusPipe
  ]
})
export class AppModule {}
