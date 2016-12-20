import { Component, Input } from '@angular/core'
import { Geoposition } from '../../services/geolocation/geolocation.model'

@Component({
  selector: 'footer',
  template: `
    <div class="footer">
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
          <p class="text-muted copyright">
            Last update: {{position && position.timestamp | date: "medium"}}
            <br/>
            Latitude: {{position && position.coords.latitude | number: '1.7-7'}},
            Longitude: {{position && position.coords.longitude | number: '1.7-7'}}
          </p>
        </div>
      </nav>
    </div>
  `
})
export class FooterComponent {
  @Input()
  position: Geoposition
}
