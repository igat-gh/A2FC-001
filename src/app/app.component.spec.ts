/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { environment } from '../environments/environment'
import { StoreModule } from '@ngrx/store'
import { coreReducer } from './core/core.reducer'
import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { Config } from './core/core.config'
import { AppRoutingModule } from './app-routing.module'
import { APP_BASE_HREF } from '@angular/common'

const config: Config = {
  openWeatherApiKey: environment.OPEN_WEATHER_API_KEY,
  env: environment.ENV,
  production: environment.production
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpModule,
        LayoutModule,
        CoreModule.forRoot(config),
        AppRoutingModule,
        // EffectsModule.run(AppEffects),
        StoreModule.provideStore(coreReducer),
      ],
      declarations: [ AppComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    TestBed.compileComponents()
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
