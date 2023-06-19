import { AboutTester } from '../pages'

describe('About Page', () => {
  beforeEach(() => {
    AboutTester.visit()
  })

  it('displays the header correctly', () => {
    AboutTester.getHeader().should('exist')
  })
})
