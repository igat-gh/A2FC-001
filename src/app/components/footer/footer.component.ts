import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
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
            Latitude: {{position && position.coords.latitude}},
            Longitude: {{position && position.coords.longitude}}
          </p>
        </div>
      </nav>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input()
  position: Geoposition
}
