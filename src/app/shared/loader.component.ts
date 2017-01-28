import { Component, Input } from '@angular/core'

@Component({
  selector: 'loader',
  styleUrls: ['./loader.component.css'],
  template: `
    <div *ngIf="isLoading" class="load-bar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
  `
})
export class LoaderComponent {
  @Input()
  isLoading: boolean
}
