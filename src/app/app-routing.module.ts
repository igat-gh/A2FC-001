import { NgModule } from '@angular/core'
import { RouterModule }  from '@angular/router'

import { coreRoutes } from './core/core.routes'

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
