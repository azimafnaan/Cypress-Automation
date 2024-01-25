describe("Handle Tabs", () => {
    it("Approach-1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example>a").invoke('removeAttr', 'target').click();
        //Assertions
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.get(".example>h3").should('have.text', 'New Window')
        cy.wait(500);
        //operations
        cy.go('back');

    })
})