export type Lang = "ru" | "en"
export type Units = "metric" | "imperial" | "standard"
export type UrlParams = CitiesInCycleOptions

export interface CityWeather {
  name: string,
  temp: number,
  icon: string
}

export interface CityWeatherItem {
  clouds: { all: number },
  wind: { deg: number, speed: number, gust: number },
  coord: { lat: number, lon: number },
  main: {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  },
  weather: {
    description: string,
    icon: string,
    main: string
  }[],
  name: string,
  dt: number,
  id: number
}

export interface OWResponse {
  cod: string,
  count: number,
  message: string,
  list: CityWeatherItem[]
}

export interface BaseOptions {
  lang?: Lang,
  units?: Units,
}

export interface CitiesInCycleOptions extends BaseOptions {
  lat: number,
  lon: number,
  cnt?: number
}
