

const API_URL = "http://api.openweathermap.org/data/2.5/"

interface CitiesInCycleOptions {
  lat: number,
  lon: number,
  cnt: number
}

type UrlParams = CitiesInCycleOptions

export const getWeatherForCitiesInCycle = (apiKey: string, options: CitiesInCycleOptions) => {
  const resourse = "find"
  const url = buildURL(apiKey, resourse, options)
  return fetch(url).then(response => response.json())
}

const buildURL = (apiKey: string, resourse: string, params: UrlParams) => {
  const endpointWithApiKey = `${API_URL}${resourse}?appid=${apiKey}&`
  const searchParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
  return endpointWithApiKey + searchParams
}