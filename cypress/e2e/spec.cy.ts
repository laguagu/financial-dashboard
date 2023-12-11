describe("Invoices search test", () => {
  it("front page contains 'Invoices' navbar Link", function () {
    cy.visit(""); // Saa baseUrl cypress.config.ts tiedostosta
    cy.get('a[href*="/invoices"]').click();

    cy.url().should("include", "/invoices");
    cy.get("label").contains("Search");

    cy.get("input").type("Patrik Laine");
    cy.contains("Patrik Laine");
  });
});

// Prevent TypeScript from reading file as legacy script
export {}