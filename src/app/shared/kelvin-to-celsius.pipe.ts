import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'kelvinToCelsius' })
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(kelvin: number, formatted: string): number | string {
    const celsius = kelvin - 273.15

    if ('formatted' === formatted) {
      return celsius < 0 ? `${(celsius).toFixed()} °C` : `+${(celsius).toFixed()} °C`
    }

    return celsius
  }
}
