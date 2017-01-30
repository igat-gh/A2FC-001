import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { environment } from '../environments/environment'

import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'

import { AppComponent } from './app.component'

import { Config } from './core/app.config'

const config: Config = {
  openWeatherApiKey: environment.OPEN_WEATHER_API_KEY,
  env: environment.ENV,
  production: environment.production
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule.forRoot(config),
    LayoutModule
  ],
  declarations: [ AppComponent ]
})
export class AppModule {}
