import { ModuleWithProviders, NgModule } from '@angular/core'

import { AppConfig, Config } from './app.config'
import { GeolocationService } from './services/geolocation/geolocation.service'
import { OpenWeatherService } from './services/openweather/openweather.service'
import { LoggerService, loggerFactory } from './services/logger/logger.service'

@NgModule({
  providers: [
    AppConfig,
    GeolocationService,
    OpenWeatherService
  ]
})
export class CoreModule {

  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: Config, useValue: config },
        { provide: LoggerService, useFactory: loggerFactory, deps: [Config] },
        { provide: OpenWeatherService, useClass: OpenWeatherService },
        { provide: GeolocationService, useClass: GeolocationService }
      ]
    }
  }
}
