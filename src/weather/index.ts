
type BaseOptions = {
  lang?: Lang,
  units?: Units,
  cnt?: number
}

type CitiesInCycleOptions = {
  lat: number,
  lon: number
} & BaseOptions

type Lang = "ru" | "en"

type Units = "metric" | "imperial" | "standard"

type UrlParams = CitiesInCycleOptions

export type CityWeather = {
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

export type WeatherResponse = {
  cod: string,
  count: number,
  message: string,
  list: CityWeather[]
}

const API_URL = "http://api.openweathermap.org/data/2.5/"

export const ICONS_ROOT = "http://openweathermap.org/img/w/"

const defaultBaseOptions: BaseOptions = { lang: "ru", units: "metric", cnt: 50 }

export const getWeatherForCitiesInCycle =
  (apiKey: string, options: CitiesInCycleOptions) => {
    const resourse = "find"
    const requestOptions: CitiesInCycleOptions = Object.assign({}, defaultBaseOptions, options)
    const url = buildResourseURL(apiKey, resourse, requestOptions)

    return fetch(url).then((response) => response.json())
  }

export const buildIconURL = (weather: CityWeather): string =>
  `${ICONS_ROOT}${weather.weather[0].icon}.png`

const buildResourseURL = (apiKey: string, resourse: string, params: UrlParams) => {
  const endpointWithApiKey = `${API_URL}${resourse}?appid=${apiKey}&`
  const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

  return endpointWithApiKey + searchParams
}