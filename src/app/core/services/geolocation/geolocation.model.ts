export interface Geoposition {
  coords: {
    latitude: number,
    longitude: number
  },
  timestamp: number
}

export interface GeoOptions {
  enableHighAccuracy?: boolean
}

export interface PositionError {
  code: number,
  message: string
}
