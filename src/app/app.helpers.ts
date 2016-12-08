import { Geoposition } from "./geolocation.model"

import { CityWeather } from "./openweather.model"
import { OpenWeatherService } from "./openweather.service"

export const geoposotionToOWCoords =
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: Geoposition) =>
    ({ lat, lon })


export const forecastToGeoJSON = (weatherItem: CityWeather) => {
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

export const renderCitiesForecast = (weather: CityWeather[], rootId: string) => {
  const root = document.getElementById(rootId)
  const weatherToTemplate = (item: CityWeather) => `
    <li class="list-group-item">
      <span class="badge">${item.main.temp}</span>
      <img width="25" height="25" src="${OpenWeatherService.buildIconURL(item)}"/>
      <span>${item.name}</span>
    </li>
  `
  root.innerHTML = weather.map(weatherToTemplate).join("")
}
