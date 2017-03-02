
import { GeolocationService } from './geolocation.service'

describe('GeolocationService', () => {
  let service: GeolocationService

  beforeEach(() => { service = new GeolocationService() })

  describe('#getCurrentPosition', () => {
    it('should return promise', () => {
      expect(service.getCurrentPosition() instanceof Promise).toBe(true)
    })
  })
})
