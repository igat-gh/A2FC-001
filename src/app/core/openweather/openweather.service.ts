import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {Http, Response, Request, URLSearchParams, RequestMethod, Headers} from '@angular/http'

import {
  UrlParams,
  BaseOptions,
  CityWeatherItem,
  CitiesInCycleOptions,
  OWResponse,
  CityWeather
} from './openweather.model'

import { AppConfig } from '../core.config'
import data from './openweather.data'

const API_URL: string = 'http://api.openweathermap.org/data/2.5/'
const ICONS_ROOT: string = 'http://openweathermap.org/img/w/'
const BASE_OPTIONS: BaseOptions = { lang: 'ru', units: 'standard' }

@Injectable()
export class OpenWeatherService {

  constructor(
    private config: AppConfig,
    private http: Http
  ) { }

  loadWeatherForCitiesInCycle(options: CitiesInCycleOptions): Observable<CityWeather[]> {
    const request = new Request({
      method: RequestMethod.Get,
      url: `${API_URL}find`,
      search: new URLSearchParams(
        this.makeParams(Object.assign({ cnt: 50 }, BASE_OPTIONS, options))
      ),
      headers: new Headers({
        'Accept': 'application/json'
      })
    })

    return this.http.request(request)
      .map((response: Response) => response.json())
    // return Observable.of(1)
    //   .map((num: number): CityWeather[] => data.list.map((item) => ({
      .map((data: OWResponse): CityWeather[] => data.list.map((item) => ({
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

  private makeParams(params: UrlParams): string {
    const appKey = `appid=${this.config.openWeatherApiKey}&`
    return appKey + Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')
  }

  public static buildIconURL(weather: CityWeatherItem): string {
    return `${ICONS_ROOT}${weather.weather[0].icon}.png`
  }
}
