import { Injectable } from '@angular/core'

export class Config {
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
