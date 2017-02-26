import { Component } from '@angular/core'

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  template: `
    <div class="main">
      <ng-content></ng-content>
    </div>
  `
})
export class MainComponent {
}
