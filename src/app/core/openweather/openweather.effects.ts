import { Injectable } from '@angular/core'
import { Actions, Effect, toPayload } from '@ngrx/effects'

import { OpenWeatherService } from './openweather.service'
import { OpenWeatherActions } from './openweather.actions'
import {CityWeather, CitiesInCycleOptions} from './openweather.model'

@Injectable()
export class OpenWeatherEffects {
  constructor (
    private updates: Actions,
    private openweather: OpenWeatherService,
    private openWeatherActions: OpenWeatherActions
  ) {}

  @Effect()
  loadWeatherForCitiesInCycle = this.updates
    .ofType(OpenWeatherActions.LOAD_FORECAST)
    .map(toPayload)
    .switchMap((options: CitiesInCycleOptions) => this.openweather.loadWeatherForCitiesInCycle(options))
    .map((forecast: CityWeather[]) => this.openWeatherActions.loadForecastSuccess(forecast))
    // .catch((error: Error) => this.openWeatherActions.loadForecastFail(error))
}
