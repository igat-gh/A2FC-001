import { Injectable } from '@angular/core'
import { Geoposition, GeoOptions, PositionError } from "./geolocation.model"

const defaultOptions: GeoOptions = {
  enableHighAccuracy: true
}

@Injectable()
export class GeolocationService {

  public loadCurrentPosition(options: GeoOptions = defaultOptions): Promise<Geoposition> {
    return new Promise((resolve, reject) => {
      const success = (position: Geoposition): void => resolve(position)
      const failure = (error: PositionError): void => reject(error)

      navigator.geolocation.getCurrentPosition(success, failure, options)
    })
  }
}
