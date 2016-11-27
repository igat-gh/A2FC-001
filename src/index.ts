import { getCurrentPosition, Geoposition, PositionError } from "./geolocation"
import { getWeatherForCitiesInCycle, buildIconURL, WeatherResponse, CityWeather } from "./weather"
import { initMap, drawIcons } from "./googlemap"

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
        icon: buildIconURL(weatherItem),
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      },
      geometry: {
        type: "Point",
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      }
    }
}
//////////////////////

const renderCitiesWeather = (weather: CityWeather[], rootId: string) => {
  const root = document.getElementById(rootId)
  const weatherToTemplate = (item: CityWeather) => `
    <li class="list-group-item">
      <span class="badge">${item.main.temp}</span>
      <img width="25" height="25" src="${buildIconURL(item)}"/>
      <span>${item.name}</span>
    </li>
  `
  root.innerHTML = weather.map(weatherToTemplate).join("")
}


type AppConfig = {
  WEATHER_API_KEY: string,
  MAP_CONTAINER_ID: string,
  LIST_CONTAINER_ID: string,
  CITIES_IN_CYCLE_COUNT: number
}

export default class App {
  geoposition: Geoposition
  weather: CityWeather[]
  map: google.maps.Map
  cfg: AppConfig

  static defaults = {
    WEATHER_API_KEY: "ddb1f0abb0c8107ef81e20d834d797a2",
    MAP_CONTAINER_ID: "map",
    LIST_CONTAINER_ID: "cities-list",
    CITIES_IN_CYCLE_COUNT: 50
  }

  constructor(config?: Object) {
    this.cfg = Object.assign({}, App.defaults, config)
  }

  run() {
    this.map = initMap(
      document.getElementById(this.cfg.MAP_CONTAINER_ID),
      { center: { lat: 0, lng: 0 }, zoom: 4 }
    )

    getCurrentPosition()
      .then((position: Geoposition) => {
        this.geoposition = position
        const { latitude: lat, longitude: lng } = this.geoposition.coords
        this.map.setCenter({ lat, lng })
        this.map.setZoom(12)
        return geoposotionToWeatherOptions(this.cfg.CITIES_IN_CYCLE_COUNT)(position)
      })
      .then(getWeatherForCitiesInCycle(this.cfg.WEATHER_API_KEY))
      .then((data: WeatherResponse) => {
        this.weather = data.list
      })
      .then(() => {
        // Data rendering
        renderCitiesWeather(this.weather, this.cfg.LIST_CONTAINER_ID)
        drawIcons(this.map, {
          type: 'FeatureCollection',
          features: this.weather.map(cityWeatherToGeoJSON)
        })
      })
      .catch((error: PositionError | Error) => {
        console.error(error)
      })
  }
}