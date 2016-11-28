import { IGeoposition } from "./../geolocation/model"

import { ICityForecast } from "./../openweather/model"
import { buildIconURL } from "./../openweather"

export const geoposotionToOWCoords =
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: IGeoposition) =>
    ({ lat, lon })


export const forecastToGeoJSON = (weatherItem: ICityForecast) => {
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

export const renderCitiesForecast = (weather: ICityForecast[], rootId: string) => {
  const root = document.getElementById(rootId)
  const weatherToTemplate = (item: ICityForecast) => `
    <li class="list-group-item">
      <span class="badge">${item.main.temp}</span>
      <img width="25" height="25" src="${buildIconURL(item)}"/>
      <span>${item.name}</span>
    </li>
  `
  root.innerHTML = weather.map(weatherToTemplate).join("")
}