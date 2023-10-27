describe("Load basic app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders the skeleton of the app", () => {
    cy.get('[data-cy-message="welcome-message"]')
      .should("exist")
      .should("have.text", "Welcome to Fun with Flags with Sheldon Cooper");
  });

  it("renders the input element", () => {
    cy.get('[data-cy-searchtext="searchtext"]')
      .should("exist")
      .should("have.text", "Search the name of a country");

    cy.get('[data-cy-searchinput="searchinput"]').should("exist");
  });
});
