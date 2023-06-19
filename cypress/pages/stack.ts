export class StackTester {
  public static visit() {
    cy.visit('/stack')
  }

  public static getHeader() {
    return cy.contains('Stack')
  }
}
