import { Action } from '@ngrx/store'
import { GeopositionState } from './geolocation.model'
import { GeopositionAction, ActionTypes } from './geolocation.actions'

// TODO: use GeopositionAction type instead of Action
export function geolocationReducer(
  state: GeopositionState = { loading: false },
  action: Action
): GeopositionState {

    switch (action.type) {
      case ActionTypes.REQUEST: {
        return Object.assign({}, state, {
          loading: true
        })
      }
      case ActionTypes.SUCCESS: {
        return Object.assign({}, state, {
          loading: false,
          entity: action.payload
        })
      }
      case ActionTypes.FAIL: {
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
