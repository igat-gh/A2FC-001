import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Geoposition } from '../core/geolocation/geolocation.model'

@Component({
  selector: 'footer',
  styleUrls: ['./footer.component.css'],
  template: `
    <div class="footer">
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
          <p class="text-muted copyright">
            <span *ngIf="position">Last update: {{position.timestamp | date: "medium"}}</span>
            <br/>
            <span *ngIf="position">Latitude: {{position.coords.latitude}}, Longitude: {{position.coords.longitude}}</span>
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
