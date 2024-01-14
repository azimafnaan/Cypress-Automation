describe("XpathLOcators", () => {
    it("xpathLocators", () => {
        cy.visit("http://www.automationpractice.pl/")
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length', 7)
    })

    it("chained xpath", () => {
        cy.visit("http://www.automationpractice.pl/")
        cy.xpath("//ul[@id='blockbestsellers']").xpath("/li").should('have.length', 7)
    })
})
