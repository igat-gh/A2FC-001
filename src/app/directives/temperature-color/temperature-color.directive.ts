import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({ selector: '[temperatureColor]' })
export class TemperatureColorDirective implements OnInit {

  @Input('temperatureColor')
  temperature: number

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.getColor()
  }

  private getColor(): string {
    const celsius = this.temperature - 273.15

    if (celsius > 0) {
      return '#efc623'
    }

    return '#5594f3'
  }
}
