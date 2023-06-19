import { RadarTester } from '../pages'

describe('Radar Page', () => {
  beforeEach(() => {
    RadarTester.visit()
  })

  it('displays the header correctly', () => {
    RadarTester.getHeader().should('exist')
  })
})
