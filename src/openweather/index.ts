import { IBaseOptions, ICitiesInCycleOptions, ICityForecast, UrlParams } from "./model"

const API_URL: string = "http://api.openweathermap.org/data/2.5/"
const ICONS_ROOT: string = "http://openweathermap.org/img/w/"

const baseOptions: IBaseOptions = { lang: "ru", units: "metric", cnt: 50 }

export const getWeatherForCitiesInCycle =
  (apiKey: string, options: ICitiesInCycleOptions) => {
    const resource = "find"
    const requestOptions: ICitiesInCycleOptions = Object.assign({}, baseOptions, options)
    const url = buildResourceURL(apiKey, resource, requestOptions)

    return fetch(url).then((response) => response.json())
  }

export const buildIconURL = (weather: ICityForecast): string =>
  `${ICONS_ROOT}${weather.weather[0].icon}.png`

const buildResourceURL = (apiKey: string, resource: string, params: UrlParams): string => {
  const endpointWithApiKey = `${API_URL}${resource}?appid=${apiKey}&`
  const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

  return endpointWithApiKey + searchParams
}
