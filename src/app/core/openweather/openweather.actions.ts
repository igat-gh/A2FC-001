import { Action } from '@ngrx/store'
import { CityWeather } from './openweather.model'

export const ActionTypes = {
  REQUEST: '[OPENWEATHER] Request',
  SUCCESS: '[OPENWEATHER] Success',
  FAIL   : '[OPENWEATHER] Fail'
}

export class RequestAction implements Action {
  type = ActionTypes.REQUEST

  constructor() {}
}

export class SuccessAction implements Action {
  type = ActionTypes.SUCCESS

  constructor(public payload: CityWeather[]) {}
}

export class FailAction implements Action {
  public type = ActionTypes.FAIL

  constructor(public payload: Error) {}
}

export type OpenWeatherAction
  = RequestAction
  | SuccessAction
  | FailAction
