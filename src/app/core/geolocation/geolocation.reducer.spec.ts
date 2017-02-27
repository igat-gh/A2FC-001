import { geolocationReducer, initialState } from './geolocation.reducer'
import { GeopositionActions } from './geolocation.actions'
import { GeopositionState } from './geolocation.model'

describe('geolocationReducer', () => {
  it('should return initial state', () => {
    expect(geolocationReducer(undefined, { type: 'SOME_TYPE' })).toEqual(initialState)
  })

  it('should handle GET_GEOPOSITION action', () => {
    const state: GeopositionState = {
      loading: false,
      entity: {
        coords: {
          latitude: null,
          longitude: null
        },
        timestamp: null
      }
    }
    const expectedState = Object.assign({}, state, { loading: true })
    expect(geolocationReducer(state, { type: GeopositionActions.GET_GEOPOSITION })).toEqual(expectedState)
  })

  it('should handle GET_GEOPOSITION_SUCCESS action', () => {
    const state: GeopositionState = {
      loading: true,
      entity: {
        coords: {
          latitude: null,
          longitude: null
        },
        timestamp: null
      }
    }
    const payload = {
      coords: {
        latitude: 123,
        longitude: 456
      },
      timestamp: 789
    }
    const action = { type: GeopositionActions.GET_GEOPOSITION_SUCCESS, payload }
    const expectedState = Object.assign({}, state, { loading: false, entity: payload })
    expect(geolocationReducer(state, action)).toEqual(expectedState)
  })

  it('should handle GET_GEOPOSITION_FAIL action', () => {
    const state: GeopositionState = {
      loading: true,
      entity: {
        coords: {
          latitude: 123,
          longitude: 456
        },
        timestamp: 789
      }
    }
    const payload = { code: 1, message: 'Error' }
    const action = { type: GeopositionActions.GET_GEOPOSITION_FAIL, payload }
    const expectedState = Object.assign({}, state, { loading: false, error: payload })
    expect(geolocationReducer(state, action)).toEqual(expectedState)
  })
})