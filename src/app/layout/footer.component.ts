import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Geoposition } from '../core/geolocation/geolocation.model'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input()
  position: Geoposition
}
