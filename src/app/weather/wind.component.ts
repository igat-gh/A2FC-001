import { Component, Input } from '@angular/core'

@Component({
  selector: 'wind',
  template: `
      <span [rotation]="direction" style="display: inline-block">→</span>
      <span>{{speed | number : '1.0-0'}} m/s</span>
    `
})
export class WindComponent {
  @Input()
  speed: number

  @Input()
  direction: number
}
