import { HomeTester } from '../pages'

describe('Home page', () => {
  beforeEach(() => {
    HomeTester.visit()
  })

  it('displays the header correctly', () => {
    HomeTester.getHeader().should('exist')
  })
})
