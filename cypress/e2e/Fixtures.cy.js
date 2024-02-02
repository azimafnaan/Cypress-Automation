describe("My Test Suite", () => {
    //Direct Access
    it.only('fixtures', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        // cy.wait(5000);
        cy.get('.oxd-button').click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
    })
    // Access through Hook - for multiple it blocks

})