import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe'

describe('KelvinToCelsiusPipe', () => {
  describe('#transform', () => {
    const pipe = new KelvinToCelsiusPipe()

    it('should transforms temperature from Kelvin to Celsius correctly', () => {
      expect(pipe.transform(273.15)).toBe(0)
    })

    it('should format transformed temperature', () => {
      expect(pipe.transform(283.15, 'formatted')).toBe('+10 °C')
      expect(pipe.transform(263.15, 'formatted')).toBe('-10 °C')
    })
  })
})
