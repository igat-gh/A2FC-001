import { Action } from '@ngrx/store'
import { PositionError, Geoposition } from './geolocation.model'

export class GeopositionActions {

  static GET_GEOPOSITION = '[Geoposition] Get position'
  public getGeoposition(): Action {
    return { type: GeopositionActions.GET_GEOPOSITION }
  }

  static GET_GEOPOSITION_SUCCESS = '[Geoposition] Get position success'
  public getGeopositionSuccess(geoposition: Geoposition): Action {
    return { type: GeopositionActions.GET_GEOPOSITION_SUCCESS, payload: geoposition }
  }

  static GET_GEOPOSITION_FAIL = '[Geoposition] Get position fail'
  public getGeopositionFail(error: PositionError): Action {
    return { type: GeopositionActions.GET_GEOPOSITION_FAIL, payload: error }
  }
}
