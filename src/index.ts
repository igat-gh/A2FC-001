import { getCurrentPosition, Geoposition, PositionError } from "./geolocation"
import { getWeatherForCitiesInCycle, WeatherResponse, CityWeather } from "./weather"
import { initMap, drawIcons } from "./googlemap"

// App configuration //
const weatherApiKey = "ddb1f0abb0c8107ef81e20d834d797a2"
const citiesInCycleCount = 50
const appContainerId = "app"
//////////////////////

// Utils and helpers //
const geoposotionToWeatherOptions = (citiesCount: number) =>
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: Geoposition) =>
    ({ lat, lon, cnt: citiesCount })


const cityWeatherToGeoJSON = (weatherItem: CityWeather) => {
  return {
      type: "Feature",
      properties: {
        city: weatherItem.name,
        weather: weatherItem.weather[0].main,
        temperature: weatherItem.main.temp,
        min: weatherItem.main.temp_min,
        max: weatherItem.main.temp_max,
        humidity: weatherItem.main.humidity,
        pressure: weatherItem.main.pressure,
        windSpeed: weatherItem.wind.speed,
        windDegrees: weatherItem.wind.deg,
        windGust: weatherItem.wind.gust,
        icon: `http://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`,
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      },
      geometry: {
        type: "Point",
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      }
    }
}
//////////////////////

const map = initMap(document.getElementById(appContainerId), { center: {lat: 0, lng: 0}, zoom: 4 })

type State = {
  map?: google.maps.Map,
  geoposition?: Geoposition,
  weather?: CityWeather[]
}

const state: State = {
  map: map,
  geoposition: null,
  weather: []
}

getCurrentPosition()
  .then((position: Geoposition) => {
    state.geoposition = position
    const { latitude: lat, longitude: lng } = state.geoposition.coords
    map.setCenter({ lat, lng })
    map.setZoom(12)
    return geoposotionToWeatherOptions(citiesInCycleCount)(position)
  })
  .then((weatherOptions) => {
    return getWeatherForCitiesInCycle(weatherApiKey)(weatherOptions)
  })
  .then((data: WeatherResponse) => {
    state.weather = data.list
    console.log(data)
    data.list.map(cityWeatherToGeoJSON).forEach(drawIcons.bind(null, map))
  })
  .catch((error: PositionError | Error) => {
    console.log(error)
  })