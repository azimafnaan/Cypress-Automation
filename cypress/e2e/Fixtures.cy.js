describe("My Test Suite", () => {
    //Direct Access
    it.skip('fixtures', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangehrm').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            // cy.wait(5000);
            cy.get('.oxd-button').click();
            cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data.expected)
        })

    })

    // Access through Hook - for multiple it blocks
    let userdata;
    before(() => {
        cy.fixture('orangehrm').then((data) => {
            userdata = data;
        })
    })
    it.only('fixtures', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        // cy.wait(5000);
        cy.get('.oxd-button').click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.expected)
    })
})