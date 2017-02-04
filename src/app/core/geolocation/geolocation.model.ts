export interface GeopositionState {
  loading: boolean,
  entity?: Geoposition,
  error?: PositionError
}

export interface Geoposition {
  coords: {
    latitude: number,
    longitude: number
  },
  timestamp: number
}

export interface PositionError {
  code: number,
  message: string
}

export interface GeoOptions {
  enableHighAccuracy?: boolean
}

