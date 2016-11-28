import { IGeoposition, IPositionError } from "./geolocation/model"
import { getCurrentPosition } from "./geolocation"

import { IWeatherResponse, ICityWeather } from "./weather/model"
import { getWeatherForCitiesInCycle } from "./weather"

import { cityWeatherToGeoJSON, geoposotionToWeatherCoords, renderCitiesWeather } from "./utils"
import { initMap, drawIcons } from "./googlemap"

type AppConfig = {
  WEATHER_API_KEY: string,
  MAP_CONTAINER_ID: string,
  LIST_CONTAINER_ID: string
}

export default class App {
  geoposition: IGeoposition
  weather: ICityWeather[]
  map: google.maps.Map
  config: AppConfig

  static defaults = {
    WEATHER_API_KEY: "ddb1f0abb0c8107ef81e20d834d797a2",
    MAP_CONTAINER_ID: "map",
    LIST_CONTAINER_ID: "cities-list"
  }

  constructor(config?: Object) {
    this.config = Object.assign({}, App.defaults, config)
  }

  run() {
    this.map = initMap(
      document.getElementById(this.config.MAP_CONTAINER_ID),
      { center: { lat: 0, lng: 0 }, zoom: 4 }
    )

    getCurrentPosition()
      .then((position: IGeoposition) => {
        this.geoposition = position
        const { latitude: lat, longitude: lng } = this.geoposition.coords
        this.map.setCenter({ lat, lng })
        this.map.setZoom(12)
        return geoposotionToWeatherCoords(position)
      })
      .then((coords) => {
        return getWeatherForCitiesInCycle(this.config.WEATHER_API_KEY, coords)
      })
      .then((data: IWeatherResponse) => {
        this.weather = data.list
      })
      .then(() => {
        // Data rendering
        renderCitiesWeather(this.weather, this.config.LIST_CONTAINER_ID)
        drawIcons(this.map, {
          type: 'FeatureCollection',
          features: this.weather.map(cityWeatherToGeoJSON)
        })
      })
      .catch((error: IPositionError | Error) => {
        console.error(error)
      })
  }
}