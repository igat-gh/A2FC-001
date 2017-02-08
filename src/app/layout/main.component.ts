import { Component } from '@angular/core'

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  template: `
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent {
}
