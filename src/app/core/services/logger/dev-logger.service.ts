import { Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable()
export class DevLoggerService implements LoggerService {
  public log(message: string): void {
    console.log(`%c ${message}`, 'color: rebeccapurple')
  }
}
