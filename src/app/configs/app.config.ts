
import { OpaqueToken } from '@angular/core'
import { AppConfig } from './app.config.model'

export const CONFIG: AppConfig = Object.freeze({
  openWeather: {
    apiKey: process.env.OPEN_WEATHER_API_KEY
  },
  env: process.env.NODE_ENV
})
console.log(process.env.OPEN_WEATHER_API_KEY)
export const APP_CONFIG = new OpaqueToken('app.config')
