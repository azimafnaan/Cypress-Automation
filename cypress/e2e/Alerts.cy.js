describe('Alerts', () => {
    //1) Javascript Alert: It will have some text and an 'OK' button

    it.skip('Js Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        // alert window automatically close by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    //2) Javascript Confirm: It will have some text with 'OK' and 'Cancel' button

    it.skip('Js Confirm Alert - Ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        // cypress automatically closed alert window by using ok button-default
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it.only('Js Confirm Alert - cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        //cypress closes alert window using cancel button
        cy.on('window:confirm', () => false)
        // cypress automatically closed alert window by using ok button-default
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })
    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel' button

    //4) Authenticated Alert 
})