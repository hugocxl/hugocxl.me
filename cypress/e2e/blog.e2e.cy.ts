import { BlogTester } from '../pages'

describe('Blog Page', () => {
  beforeEach(() => {
    BlogTester.visit()
  })

  it('displays the header correctly', () => {
    BlogTester.getHeader().should('exist')
  })
})
