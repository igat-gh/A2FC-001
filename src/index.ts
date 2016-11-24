import { getCurrentPosition, Geoposition, PositionError } from "./geolocationService"
import { getWeatherForCitiesInCycle } from './weatherService'

const apiKey = "ddb1f0abb0c8107ef81e20d834d797a2"

getCurrentPosition()
  .catch((error: PositionError) => {
    console.log(error)
  })
  .then((position: Geoposition) => {
    const options = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      cnt: 50
     }
    return getWeatherForCitiesInCycle(apiKey, options)
  })
  .catch(error => {
    console.log(error)
  })
  .then((data) => {
    console.log(data)
  })
