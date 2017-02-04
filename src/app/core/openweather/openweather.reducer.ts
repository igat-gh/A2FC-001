import { Action } from '@ngrx/store'
import { WeatherState } from './openweather.model'
import { OpenWeatherAction, ActionTypes } from './openweather.actions'

// TODO: use OpenWeatherAction type instead of Action
export function openweatherReducer(
  state: WeatherState = { loading: false, entities: [] },
  action: Action
): WeatherState {

  switch (action.type) {
    case ActionTypes.REQUEST: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case ActionTypes.SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        entities: action.payload
      })
    }
    case ActionTypes.FAIL: {
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
