import { Component, Input } from '@angular/core'

@Component({
  selector: 'wind',
  template: `
      <span [rotation]="direction">→</span>
      <span>{{speed | number : '1.1-1'}}m/s</span>
    `
})
export class WindComponent {
  @Input()
  speed: number

  @Input()
  direction: number
}
