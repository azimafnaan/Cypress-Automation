describe("MySuite", () => {
    it("NavigationTest", () => {
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        // Navigate to Home
        cy.go("back")
        cy.title().should('eq', 'Your Store')

        cy.go("forward")//cameras
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.go(-1)//home
        cy.title().should('eq', 'Your Store')

        cy.go(1)//cameras
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.reload()

    })
})