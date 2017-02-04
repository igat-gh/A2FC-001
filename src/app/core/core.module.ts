import { ModuleWithProviders, NgModule } from '@angular/core'

import { AppConfig, Config } from './core.config'
import { GeolocationService } from './geolocation/geolocation.service'
import { OpenWeatherService } from './openweather/openweather.service'
import { LoggerService } from './logger/logger.service'
import { loggerFactory } from './logger/logger.factory'

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
        { provide: LoggerService, useFactory: loggerFactory, deps: [ Config ] },
        { provide: OpenWeatherService, useClass: OpenWeatherService },
        { provide: GeolocationService, useClass: GeolocationService }
      ]
    }
  }
}
