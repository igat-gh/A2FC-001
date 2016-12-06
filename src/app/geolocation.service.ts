import { Injectable } from '@angular/core'
import { IGeoposition, IGeoOptions, IPositionError } from "./geolocation.model"

const defaultOptions: IGeoOptions = {
  enableHighAccuracy: true
}

@Injectable()
export class GeolocationService {

  public getCurrentPosition(options: IGeoOptions = defaultOptions): Promise<IGeoposition> {
    return new Promise((resolve, reject) => {
      const success = (position: IGeoposition): void => resolve(position)
      const failure = (error: IPositionError): void => reject(error)

      navigator.geolocation.getCurrentPosition(success, failure, options)
    })
  }
}