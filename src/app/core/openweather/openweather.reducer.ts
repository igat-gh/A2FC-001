import { Action } from '@ngrx/store'
import { WeatherState } from './openweather.model'
import { OpenWeatherActions } from './openweather.actions'

export function openWeatherReducer(
  state: WeatherState = { loading: false, entities: [] },
  action: Action
): WeatherState {

  switch (action.type) {
    case OpenWeatherActions.LOAD_FORECAST: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case OpenWeatherActions.LOAD_FORECAST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        entities: action.payload
      })
    }
    case OpenWeatherActions.LOAD_FORECAST_FAIL: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
}
