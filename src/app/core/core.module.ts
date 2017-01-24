import { ModuleWithProviders, NgModule } from '@angular/core'

import { AppConfig, APP_CONFIG, Setings } from './app.config'
import { Config } from './app.config.model'
import { GeolocationService } from './services/geolocation/geolocation.service'
import { OpenWeatherService } from './services/openweather/openweather.service'

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    // AppConfig,
    GeolocationService,
    OpenWeatherService
  ]
})
export class CoreModule {

  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        // { provide: Setings, useValue: config },
        { provide: OpenWeatherService, useClass: OpenWeatherService },
        { provide: GeolocationService, useClass: GeolocationService }
      ]
    }
  }
}
