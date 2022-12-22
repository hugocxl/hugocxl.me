export class StackTester {
  public static visit() {
    cy.visit('/stack')
  }
  public static getList() {
    return cy.get('.stack-list')
  }
}
