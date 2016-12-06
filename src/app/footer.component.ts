import { Component } from '@angular/core'

@Component({
  selector: 'footer',
  template: `
    <div class="footer">
      <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
          <p class="text-muted copyright">Powered by TypeScript & Angular 2</p>
        </div>
      </nav>
    </div>
  `
})
export class FooterComponent {}
