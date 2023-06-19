import { HandbooksTester } from '../pages'

describe('Handbooks Page', () => {
  beforeEach(() => {
    HandbooksTester.visit()
  })

  it('displays the header correctly', () => {
    HandbooksTester.getHeader().should('exist')
  })
})
