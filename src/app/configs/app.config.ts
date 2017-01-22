
import { OpaqueToken } from '@angular/core'
import { AppConfig } from './app.config.model'

export const CONFIG: AppConfig = Object.freeze({
  openWeather: {
    apiKey: 'ddb1f0abb0c8107ef81e20d834d797a2'
  },
  env: process.env.NODE_ENV
})

export const APP_CONFIG = new OpaqueToken('app.config')
