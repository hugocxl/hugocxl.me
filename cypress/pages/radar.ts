export class RadarTester {
  public static visit() {
    cy.visit('/radar')
  }

  public static getHeader() {
    return cy.contains('Radar')
  }
}
