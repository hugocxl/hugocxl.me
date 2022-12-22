import { AboutTester } from '../pages'

describe('About page', () => {
  beforeEach(() => {
    AboutTester.visit()
  })

  it('displays the header correctly', () => {
    AboutTester.getHeader().should('exist')
  })
})
