import { NgModule } from '@angular/core'
import { AgmCoreModule } from 'angular2-google-maps/core'
import { SharedModule } from '../shared/shared.module'
import { MapComponent } from './map.component'
import { MapRoutingModule } from './map-routing.module'

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot(),
    MapRoutingModule
  ],
  declarations: [ MapComponent ],
  exports: [ MapComponent ]
})
export class MapModule { }
