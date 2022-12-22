export class ResourcesTester {
  public static visit() {
    cy.visit('/resources')
  }

  public static getHeader() {
    return cy.contains('Resources')
  }
}
