export class AboutTester {
  public static visit() {
    cy.visit('/about')
  }

  public static getHeader() {
    return cy.contains('About')
  }
}
