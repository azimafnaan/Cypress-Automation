//before
//after
//beforeEach
//AfterEach

describe("My Test Suite", () => {

    before(() => {
        cy.log("Launch App");
    })

    after(() => {
        cy.log("Close App");
    })

    beforeEach(() => {
        cy.log("******  Login  ******");
    })

    afterEach(() => {
        cy.log("******  Logout  ******");
    })

    it('search', () => {
        cy.log("***** Searching *****");
    })

    it('advanced search', () => {
        cy.log("***** Advanced Searching *****");
    })

    it('listing products', () => {
        cy.log("***** Listing Products *****");
    })
})