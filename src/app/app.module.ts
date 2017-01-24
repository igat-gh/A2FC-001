import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'

import { AppComponent } from './app.component'

import { Config } from './core/app.config'

const config: Config = {
  openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY,
  env: process.env.NODE_ENV
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(config),
    LayoutModule
  ],
  declarations: [ AppComponent ]
})
export class AppModule {}
