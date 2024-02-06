describe('MyTestSuit', () => {
    it("DataDrivenTesting", () => {
        cy.fixture('orangehrm2.json').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get('.oxd-button').click();
                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
                    cy.wait(5000);
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.expected);

                    //Logout User
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userdata.expected)

                }
            })
        })

    })
})