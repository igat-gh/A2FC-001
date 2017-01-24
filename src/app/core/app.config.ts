import { Injectable, OpaqueToken } from '@angular/core'

import { Config } from './app.config.model'

export const APP_CONFIG = new OpaqueToken('app.config')

export class Setings {
  public env: string
  public openWeatherApiKey: string
}

@Injectable()
export class AppConfig {
  public env: string
  public openWeatherApiKey: string

  constructor(private _config: Config) {
    this.env = _config.env
    this.openWeatherApiKey = _config.openWeatherApiKey
  }
}
