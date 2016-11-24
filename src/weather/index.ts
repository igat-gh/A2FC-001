
interface CitiesInCycleOptions {
  lat: number,
  lon: number,
  cnt: number
}

type UrlParams = CitiesInCycleOptions

type CityWeather = {
  clouds: { all: number },
  wind: { deg: number, speed: number },
  coord: { lat: number, lon: number },
  main: {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  },
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