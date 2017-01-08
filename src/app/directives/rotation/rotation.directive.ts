import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({ selector: '[rotation]' })
export class RotationDirective implements OnInit {

  @Input('rotation')
  angle: number

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.transform = `rotate(${this.angle}deg)`
  }
}
