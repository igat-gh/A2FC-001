import { getCurrentPosition, Geoposition, PositionError } from "./geolocation"
import { getWeatherForCitiesInCycle, WeatherResponse } from "./weather"
import { initMap } from "./googlemap"

// App configuration //
const weatherMapsApiKey = "ddb1f0abb0c8107ef81e20d834d797a2"
// const googleMapsApiKey = "AIzaSyD8cRmrddIZI_FMfQgfEod4SBxnXzZYHuU"
const citiesInCycleCount = 50
const appContainerId = "app"
//////////////////////

// Utils and helpers //
const geoposotionToWeatherOptions = (citiesCount: number) =>
  ({ coords: { latitude: lat }, coords: { longitude: lon }}: Geoposition) =>
    ({ lat, lon, cnt: citiesCount })
//////////////////////

const weatherInCycle = getWeatherForCitiesInCycle(weatherMapsApiKey)

const map = initMap(document.getElementById(appContainerId), { center: {lat: 0, lng: 0}, zoom: 4 })

console.log(map)

getCurrentPosition()
  .then(geoposotionToWeatherOptions(citiesInCycleCount))
  .then(weatherInCycle)
  .then((data: WeatherResponse) => {
    console.log(data)
  })
  .catch((error: PositionError | Error) => {
    console.log(error)
  })