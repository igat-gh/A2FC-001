import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { coreReducer } from './core/core.reducer'
import { environment } from '../environments/environment'
import { Config } from './core/core.config'
import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'
import { AppComponent } from './app.component'
import { AppEffects } from './app.effects'
import { AppRoutingModule } from './app-routing.module';

const config: Config = {
  openWeatherApiKey: environment.OPEN_WEATHER_API_KEY,
  env: environment.ENV,
  production: environment.production
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    LayoutModule,
    CoreModule.forRoot(config),
    // EffectsModule.run(AppEffects),
    StoreModule.provideStore(coreReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [ AppComponent ]
})
export class AppModule {}
