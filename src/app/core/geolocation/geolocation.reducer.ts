import { Action } from '@ngrx/store'
import { GeopositionState } from './geolocation.model'
import { GeopositionActions } from './geolocation.actions'

const initialState: GeopositionState = {
  loading: false,
  entity: {
    coords: {
      latitude: null,
      longitude: null
    },
    timestamp: null
  }
}

export function geolocationReducer(
  state: GeopositionState = initialState,
  action: Action
): GeopositionState {

    switch (action.type) {
      case GeopositionActions.GET_GEOPOSITION: {
        return Object.assign({}, state, {
          loading: true
        })
      }
      case GeopositionActions.GET_GEOPOSITION_SUCCESS: {
        return Object.assign({}, state, {
          loading: false,
          entity: action.payload
        })
      }
      case GeopositionActions.GET_GEOPOSITION_FAIL: {
        return Object.assign({}, state, {
          loading: false,
          error: action.payload
        })
      }
      default: {
        return state
      }
  }
}
