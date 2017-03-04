import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FormsModule }   from '@angular/forms'

import { LoaderComponent } from './loader.component'
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe'
import { TemperatureColorDirective } from './temperature-color.directive'
import { RotationDirective } from './rotation.directive'
import { UnlessDirective } from './unless.directive'

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialModule ],
  declarations: [
    LoaderComponent,
    KelvinToCelsiusPipe,
    RotationDirective,
    TemperatureColorDirective,
    UnlessDirective
  ],
  exports: [
    LoaderComponent,
    KelvinToCelsiusPipe,
    RotationDirective,
    TemperatureColorDirective,
    UnlessDirective,
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
