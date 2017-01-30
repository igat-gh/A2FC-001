import { ProdLoggerService } from './prod-logger.service'
import { DevLoggerService } from './dev-logger.service'
import { Config } from '../../core.config'

export function loggerFactory(config: Config) {
  return config.production ? new ProdLoggerService() : new DevLoggerService();
}
