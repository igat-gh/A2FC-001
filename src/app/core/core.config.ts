import { Injectable } from '@angular/core'

export class Config {
  public env: string
  public openWeatherApiKey: string
  public production: boolean
  public temperatureMode: string
}

@Injectable()
export class AppConfig {
  public env: string
  public openWeatherApiKey: string
  public production: boolean
  public temperatureMode: string = 'C'

  constructor(private _config: Config) {
    this.env = _config.env
    this.openWeatherApiKey = _config.openWeatherApiKey
    this.production = _config.production
    this.temperatureMode = _config.temperatureMode
  }
}
