import { Injectable } from '@angular/core'
import {
  UrlParams,
  IBaseOptions,
  ICityWeather,
  ICitiesInCycleOptions,
} from './openweather.model'
import data from './openweather.data'


const API_URL: string = 'http://api.openweathermap.org/data/2.5/'
const ICONS_ROOT: string = 'http://openweathermap.org/img/w/'
const BASE_OPTIONS: IBaseOptions = { lang: 'ru', units: 'standard', cnt: 50 }


@Injectable()
export class OpenWeatherService {

  constructor(private apiKey: string) { }

  getWeatherForCitiesInCycle(options: ICitiesInCycleOptions) {
    const requestOptions: ICitiesInCycleOptions = Object.assign({}, BASE_OPTIONS, options)
    const resource = 'find'
    const url = this.buildResourceURL(resource, requestOptions)

    return fetch(url).then((response) => response.json()).catch(() => data)
  }

  private buildResourceURL(resource: string, params: UrlParams): string {
    const endpointWithApiKey = `${API_URL}${resource}?appid=${this.apiKey}&`
    const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

    return endpointWithApiKey + searchParams
  }

  static buildIconURL(weather: ICityWeather): string {
    return `${ICONS_ROOT}${weather.weather[0].icon}.png`
  }
}
