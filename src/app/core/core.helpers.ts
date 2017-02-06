import { Geoposition } from "./geolocation/geolocation.model"

import {CityWeatherItem, CitiesInCycleOptions} from "./openweather/openweather.model"
import { OpenWeatherService } from "./openweather/openweather.service"

export const geoposotionToOWCoords =
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: Geoposition): CitiesInCycleOptions =>
    ({ lat, lon })


export const forecastToGeoJSON = (weatherItem: CityWeatherItem) => {
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
        icon: OpenWeatherService.buildIconURL(weatherItem),
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      },
      geometry: {
        type: "Point",
        coordinates: [ weatherItem.coord.lon, weatherItem.coord.lat ]
      }
    }
}
