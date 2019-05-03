context("Nav menu", () => {
    beforeEach(() => {
      // TODO make the port dynamic
      cy.visit(`http://localhost:8000`)
      cy.injectAxe()
      cy.wait(100)
    })
    it("has no accessibility violations on load", () => {
      cy.checkA11y()
    })
    it("has a focusable, labeled button", () => {
      cy.get("[aria-label='Open menu']").focus()
      cy.focused().should("have.attr", "aria-label")
    })
})
  