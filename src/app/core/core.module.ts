import { ModuleWithProviders, NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'

import { GeolocationEffects } from './geolocation/geolocation.effects'
import { GeopositionActions } from './geolocation/geolocation.actions'
import { GeolocationService } from './geolocation/geolocation.service'
import { OpenWeatherService } from './openweather/openweather.service'
import { OpenWeatherActions } from './openweather/openweather.actions'
import { AppConfig, Config } from './core.config'
import { LoggerService } from './logger/logger.service'
import { loggerFactory } from './logger/logger.factory'
import { OpenWeatherEffects } from './openweather/openweather.effects';

@NgModule({
  imports: [
    // EffectsModule.run(GeolocationEffects),
    // EffectsModule.run(OpenWeatherEffects)
  ],
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
        { provide: GeolocationService, useClass: GeolocationService },
        { provide: GeopositionActions, useClass: GeopositionActions },
        { provide: OpenWeatherActions, useClass: OpenWeatherActions },
      ]
    }
  }
}
