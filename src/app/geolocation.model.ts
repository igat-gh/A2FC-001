export interface IGeoposition {
  coords: {
    latitude: number,
    longitude: number
  }
}

export interface IGeoOptions {
  enableHighAccuracy?: boolean
}

export interface IPositionError {
  code: number,
  message: string
}