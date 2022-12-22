import { ResourcesTester } from '../pages'

describe('Resources page', () => {
  beforeEach(() => {
    ResourcesTester.visit()
  })

  it('displays the header correctly', () => {
    ResourcesTester.getHeader().should('exist')
  })
})
