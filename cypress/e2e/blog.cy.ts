import { BlogTester } from '../pages'

describe('Blog page', () => {
  beforeEach(() => {
    BlogTester.visit()
  })

  it('displays the header correctly', () => {
    BlogTester.getHeader().should('exist')
  })
})
