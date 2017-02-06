import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs'

import { GeopositionActions } from './geolocation.actions'
import { GeolocationService } from './geolocation.service'
import { Geoposition, PositionError } from './geolocation.model'

@Injectable()
export class GeolocationEffects {
  constructor (
    private updates: Actions,
    private geolocation: GeolocationService,
    private geolocationActions: GeopositionActions
  ) {}

  @Effect()
  getGeolocation = this.updates
    .ofType(GeopositionActions.GET_GEOPOSITION)
    .switchMap(() => Observable.from(this.geolocation.getCurrentPosition()))
    .map((position: Geoposition) => this.geolocationActions.getGeopositionSuccess(position))
    // .map((position: Geoposition) => position)
    // .catch((error: PositionError) => this.geolocationActions.getGeopositionFail(error))
}
