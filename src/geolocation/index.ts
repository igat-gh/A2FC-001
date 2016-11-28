import { IGeoposition, IGeoOptions, IPositionError, GeopositionResponse } from "./model"

const defaultOptions: IGeoOptions = {
  enableHighAccuracy: true
}

export const getCurrentPosition =
  (options: IGeoOptions = defaultOptions): Promise<GeopositionResponse> => {
    return new Promise((resolve, reject) => {
      const success = (position: IGeoposition): void => resolve(position)
      const failure = (error: IPositionError): void => reject(error)

      navigator.geolocation.getCurrentPosition(success, failure, options)
    })
  }