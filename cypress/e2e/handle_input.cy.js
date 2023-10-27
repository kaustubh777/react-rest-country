describe("Load countries in app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("render matching country one", () => {
    cy.get('[data-cy-searchinput="searchinput"]')
      .should("exist")
      .click()
      .type("Ireland");
    cy.get('[data-cy-country="Republic of Ireland"]').should("exist");
  });

  it("when no matching country", () => {
    cy.get('[data-cy-searchinput="searchinput"]')
      .should("exist")
      .click()
      .type("zzzzzz");
    cy.get('[daya-cy-nodata="nodata"]').should("exist");
  });

  it("open particular country details", () => {
    cy.get('[data-cy-searchinput="searchinput"]')
      .should("exist")
      .click()
      .type("Ireland");
    cy.get('[data-cy-country="Republic of Ireland"]').should("exist").click();
    cy.url().should("include", "/country");
    cy.get('[data-cy-flag="flag"]').should("exist");
    cy.get('[data-cy-name="name"]').should("exist");
  });
});
