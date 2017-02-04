import { Action } from '@ngrx/store'
import { CityWeather } from './openweather.model'

export class OpenWeatherActions {

  static LOAD_FORECAST = '[OpenWeather] Load forecast'
  public loadForecast(): Action {
    return { type: OpenWeatherActions.LOAD_FORECAST }
  }

  static LOAD_FORECAST_SUCCESS = '[OpenWeather] Load forecast success'
  public loadForecastSuccess(forecast: CityWeather[]): Action {
    return { type: OpenWeatherActions.LOAD_FORECAST_SUCCESS, payload: forecast }
  }

  static LOAD_FORECAST_FAIL = '[OpenWeather] Load forecast fail'
  public loadForecastFail(error: Error): Action {
    return { type: OpenWeatherActions.LOAD_FORECAST_FAIL, payload: error }
  }
}
