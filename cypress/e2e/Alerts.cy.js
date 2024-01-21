describe('Alerts', () => {
    //1) Javascript Alert: It will have some text and an 'OK' button

    it('Js Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Alert')
        })
    })


    //2) Javascript Confirm: It will have some text with 'OK' and 'Cancel' button

    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel' button

    //4) Authenticated Alert 
})