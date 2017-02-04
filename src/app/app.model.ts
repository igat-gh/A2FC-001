import { GeopositionState } from './core/geolocation/geolocation.model'
import { WeatherState } from './core/openweather/openweather.model'

export interface AppState {
  geolocation: GeopositionState,
  weather: WeatherState
}
