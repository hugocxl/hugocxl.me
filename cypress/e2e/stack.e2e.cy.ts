import { StackTester } from '../pages'

describe('Stack Page', () => {
  beforeEach(() => {
    StackTester.visit()
  })

  it('displays the header correctly', () => {
    StackTester.getHeader().should('exist')
  })
})
