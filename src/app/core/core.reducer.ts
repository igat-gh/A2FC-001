import { combineReducers, ActionReducer, State } from '@ngrx/store'

import { geolocationReducer } from './geolocation/geolocation.reducer'
import { openWeatherReducer } from './openweather/openweather.reducer'

const reducer = combineReducers({
  geolocation: geolocationReducer,
  weather: openWeatherReducer
})

export function coreReducer(state: any, action: any) {
 return reducer(state, action)
}
