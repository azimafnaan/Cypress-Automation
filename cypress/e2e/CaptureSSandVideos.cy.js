describe("MySuite", () => {
    it("Capture Screenshots", () => {
        cy.visit("https://www.facebook.com/")
        cy.wait(5000);
        cy.get('.fb_logo').screenshot("logo");
    })
})