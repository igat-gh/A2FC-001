import { Injectable, Inject } from '@angular/core'
import {
  UrlParams,
  BaseOptions,
  CityWeatherItem,
  CitiesInCycleOptions,
  OWResponse,
  CityWeather
} from './openweather.model'

import { AppConfig } from '../../app.config'
import data from './openweather.data'

const API_URL: string = 'http://api.openweathermap.org/data/2.5/'
const ICONS_ROOT: string = 'http://openweathermap.org/img/w/'
const BASE_OPTIONS: BaseOptions = { lang: 'ru', units: 'standard' }

@Injectable()
export class OpenWeatherService {

  constructor(private config: AppConfig) { }

  getWeatherForCitiesInCycle(options: CitiesInCycleOptions): Promise<CityWeather[]> {
    const requestOptions: CitiesInCycleOptions = Object.assign({ cnt: 50 }, BASE_OPTIONS, options)
    const resource = 'find'
    const url = this.buildResourceURL(resource, requestOptions)

    return fetch(url).then((response) => response.json()).catch(() => data)
      .then((data: OWResponse): CityWeather[] => data.list.map((item: CityWeatherItem) => ({
        name: item.name,
        temp: item.main.temp,
        icon: OpenWeatherService.buildIconURL(item),
        wind: {
          deg: item.wind.deg,
          speed: item.wind.speed
        },
        coords: {
          latitude: item.coord.lat,
          longitude: item.coord.lon
        }
      })))
  }

  private buildResourceURL(resource: string, params: UrlParams): string {
    const endpointWithApiKey = `${API_URL}${resource}?appid=${'ddb1f0abb0c8107ef81e20d834d797a2'}&`
    const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

    return endpointWithApiKey + searchParams
  }

  public static buildIconURL(weather: CityWeatherItem): string {
    return `${ICONS_ROOT}${weather.weather[0].icon}.png`
  }
}
