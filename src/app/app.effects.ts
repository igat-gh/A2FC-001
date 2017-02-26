import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'

import {GeolocationEffects} from './core/geolocation/geolocation.effects'
import {OpenWeatherEffects} from './core/openweather/openweather.effects'
import { geoposotionToOWCoords } from './core/core.helpers'
import {GeopositionActions} from './core/geolocation/geolocation.actions';
import {Geoposition} from './core/geolocation/geolocation.model';
import {OpenWeatherActions} from './core/openweather/openweather.actions';
import {CitiesInCycleOptions, CityWeather} from './core/openweather/openweather.model';
import {GeolocationService} from './core/geolocation/geolocation.service';
import {Observable} from 'rxjs';
import {OpenWeatherService} from './core/openweather/openweather.service';

@Injectable()
export class AppEffects {
  constructor (
    private actions: Actions,
    private geolocationEffects: GeolocationEffects,
    private openWeatherActions: OpenWeatherActions,
    private geolocationActions: GeopositionActions,
    private geolocationService: GeolocationService,
    private openWeatherService: OpenWeatherService
  ) {}

  @Effect()
  loadAppData = this.actions
    .ofType('Load app data')
    .do(() => this.geolocationActions.getGeoposition())
    .switchMap(() => Observable.from(this.geolocationService.getCurrentPosition()))
    .do((position: Geoposition) => this.geolocationActions.getGeopositionSuccess(position))
    .do((position: Geoposition) => this.openWeatherActions.loadForecast())
    .switchMap((position: Geoposition) => this.openWeatherService.loadWeatherForCitiesInCycle(geoposotionToOWCoords(position)))
    .do((forecast: CityWeather[]) => this.openWeatherActions.loadForecastSuccess(forecast))
}
