export class HomeTester {
  public static visit() {
    cy.visit('')
  }

  public static getHeader() {
    return cy.contains('hugo corta')
  }
}
