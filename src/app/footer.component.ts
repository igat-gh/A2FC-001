import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
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
  lat: Observable<number>
  lon: Observable<number>
  lastUpdate: Observable<number>

  @Input()
  private position: Observable<IGeoposition>

  ngOnInit() {
    this.position.subscribe((pos: IGeoposition) => {
      this.lat = Observable.of(pos.coords.latitude)
      this.lon = Observable.of(pos.coords.longitude)
      this.lastUpdate = Observable.of(pos.timestamp)
    })
  }
}
