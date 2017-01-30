import { Injectable } from '@angular/core'
import { ProdLoggerService } from './prod-logger.service'
import { DevLoggerService } from './dev-logger.service'
import { Config } from '../../app.config'

export function loggerFactory(config: Config) {
  return config.production ? new ProdLoggerService() : new DevLoggerService();
}

@Injectable()
export abstract class LoggerService {
  abstract log(message: string): void
}
