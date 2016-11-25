
interface CitiesInCycleOptions {
  lat: number,
  lon: number,
  cnt: number
}

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

export const iconsRoot = "http://openweathermap.org/img/w/"

export const getWeatherForCitiesInCycle = (apiKey: string) =>
  (options: CitiesInCycleOptions) => {
    const resourse = "find"
    const url = buildURL(apiKey, resourse, options)

    return fetch(url).then((response) => response.json())
  }

const buildURL = (apiKey: string, resourse: string, params: UrlParams) => {
  const endpointWithApiKey = `${API_URL}${resourse}?appid=${apiKey}&`
  const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

  return endpointWithApiKey + searchParams
}