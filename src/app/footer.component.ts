import { Component, Input, OnInit } from '@angular/core'
import { IGeoposition } from './geolocation.model'

@Component({
  selector: 'footer',
  template: `
    <div class="footer">
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
          <p class="text-muted copyright">
            Last update: {{lastUpdate | async | date: "medium"}}
            <br/>
            Latitude: {{lat | async | number: '1.7-7'}},
            Longitude: {{lon | async | number: '1.7-7'}}
          </p>
        </div>
      </nav>
    </div>
  `
})
export class FooterComponent implements OnInit {
  lat: Promise<number>
  lon: Promise<number>
  lastUpdate: Promise<number>

  @Input()
  private position: Promise<IGeoposition>

  ngOnInit() {
    this.position.then((pos: IGeoposition) => {
      this.lat = Promise.resolve(pos.coords.latitude)
      this.lon = Promise.resolve(pos.coords.longitude)
      this.lastUpdate = Promise.resolve(pos.timestamp)
    })
  }
}
