import { Component } from '@angular/core'

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" routerLink="/">Weather</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li routerLinkActive="active"><a routerLink="/cities">Cities</a></li>
              <li routerLinkActive="active"><a routerLink="/map">Map</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `
})
export class HeaderComponent {}
