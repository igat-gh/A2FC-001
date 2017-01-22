import { Component, Input } from '@angular/core'

@Component({
  selector: 'loader',
  template: `
    <div *ngIf="isLoading" class="load-bar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
  `,
  styles: [`
    .load-bar {
      z-index: 99999;
      position: relative;
      /*margin-top: 20px;*/
      width: 100%;
      height: 6px;
      background-color: #fdba2c;
    }
    .bar {
      content: "";
      display: inline;
      position: absolute;
      width: 0;
      height: 100%;
      left: 50%;
      text-align: center;
    }
    .bar:nth-child(1) {
      background-color: #da4733;
      animation: loading 3s linear infinite;
    }
    .bar:nth-child(2) {
      background-color: #3b78e7;
      animation: loading 3s linear 1s infinite;
    }
    .bar:nth-child(3) {
      background-color: #fdba2c;
      animation: loading 3s linear 2s infinite;
    }
    @keyframes loading {
      from {left: 50%; width: 0;z-index:100;}
      33.3333% {left: 0; width: 100%;z-index: 10;}
      to {left: 0; width: 100%;}
    }
  `],
})
export class LoaderComponent {
  @Input()
  isLoading: boolean
}
