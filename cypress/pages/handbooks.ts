export class HandbooksTester {
  public static visit() {
    cy.visit('/handbooks')
  }

  public static getHeader() {
    return cy.contains('Handbooks')
  }
}
