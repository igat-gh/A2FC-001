import { Injectable } from '@angular/core'
import {
  UrlParams,
  IBaseOptions,
  ICityForecast,
  ICitiesInCycleOptions,
} from "./openweather.model"

const API_URL: string = "http://api.openweathermap.org/data/2.5/"
const ICONS_ROOT: string = "http://openweathermap.org/img/w/"
const BASE_OPTIONS: IBaseOptions = { lang: "ru", units: "metric", cnt: 50 }


@Injectable()
export class OpenWeatherService {

  constructor(private apiKey: string) { }

  getWeatherForCitiesInCycle(options: ICitiesInCycleOptions) {
    const requestOptions: ICitiesInCycleOptions = Object.assign({}, BASE_OPTIONS, options)
    const resource = "find"
    const url = this.buildResourceURL(resource, requestOptions)

    return fetch(url).then((response) => response.json())
  }

  private buildResourceURL(resource: string, params: UrlParams): string {
    const endpointWithApiKey = `${API_URL}${resource}?appid=${this.apiKey}&`
    const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

    return endpointWithApiKey + searchParams
  }

  static buildIconURL(weather: ICityForecast): string {
    return `${ICONS_ROOT}${weather.weather[0].icon}.png`
  }
}