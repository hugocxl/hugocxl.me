export class BlogTester {
  public static visit() {
    cy.visit('/blog')
  }

  public static getHeader() {
    return cy.contains('Blog')
  }
}
