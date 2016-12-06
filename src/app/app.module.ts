import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'
import { MainComponent } from './main.component'
import { SidebarComponent } from './sidebar.component'
import { MapComponent } from './googlemap.component'

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    MapComponent
  ]
})
export class AppModule {}
