import { IGeoposition } from "./../geolocation/model"

import { ICityWeather } from "./../weather/model"
import { buildIconURL } from "./../weather"

export const geoposotionToWeatherCoords =
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: IGeoposition) =>
    ({ lat, lon })


export const cityWeatherToGeoJSON = (weatherItem: ICityWeather) => {
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

export const renderCitiesWeather = (weather: ICityWeather[], rootId: string) => {
  const root = document.getElementById(rootId)
  const weatherToTemplate = (item: ICityWeather) => `
    <li class="list-group-item">
      <span class="badge">${item.main.temp}</span>
      <img width="25" height="25" src="${buildIconURL(item)}"/>
      <span>${item.name}</span>
    </li>
  `
  root.innerHTML = weather.map(weatherToTemplate).join("")
}