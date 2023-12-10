describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe("Home page test", () => {
  it("front page contains 'Home' text", function () {
    cy.visit("");
    cy.contains("Home")
  })
})