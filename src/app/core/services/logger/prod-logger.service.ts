import { Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable()
export class ProdLoggerService implements LoggerService {
  public log(message: string): void {
    console.log(`%c ${Date.now()}: ${message}`, 'color: hotpink')
  }
}
