import { Injectable } from '@angular/core'

@Injectable()
export class ProdLoggerService {
  public log(message: string): void {
    console.log(`%c ${message}`, 'color: hotpink')
  }
}
