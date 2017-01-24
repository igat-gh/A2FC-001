import { NgModule } from '@angular/core'
import { AgmCoreModule } from 'angular2-google-maps/core'

import { SharedModule } from '../shared/shared.module'

import { MapComponent } from './map.component'

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot(),
  ],
  declarations: [ MapComponent ],
  exports: [ MapComponent ]
})
export class MapModule { }
