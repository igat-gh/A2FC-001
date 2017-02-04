import { Action } from '@ngrx/store'
import { PositionError, Geoposition } from './geolocation.model'

export const ActionTypes = {
  REQUEST: '[GEOPOSITION] Request',
  SUCCESS: '[GEOPOSITION] Success',
  FAIL   : '[GEOPOSITION] Fail'
}

export class RequestAction implements Action {
  type = ActionTypes.REQUEST

  constructor() {}
}

export class SuccessAction implements Action {
  type = ActionTypes.SUCCESS

  constructor(public payload: Geoposition) {}
}

export class FailAction implements Action {
  public type = ActionTypes.FAIL

  constructor(public payload: PositionError) {}
}

export type GeopositionAction
  = RequestAction
  | SuccessAction
  | FailAction
