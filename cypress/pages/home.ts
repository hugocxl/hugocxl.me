export class HomeTester {
  public static visit() {
    cy.visit('')
  }

  public static getHeader() {
    return cy.contains('Hugo Corta')
  }
}
