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

    it.skip('Js Confirm Alert - cancel', () => {
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
    it.skip('Js Prompt Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Hello, world!");
        })
        cy.get("button[onclick='jsPrompt()']").click();
        //cypress will automatically closed alert prompt window by using ok button-default
        //cy.on('window:prompt', () => false)
        cy.get("#result").should('have.text', 'You entered: Hello, world!')
    })

    //4) Authenticated Alert

    it.only("Authenticated Alert", () => {
        //Approach-1
        /*  
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
              auth: {
                  username: "admin",
                  password: "admin"
              }
          })
          //assertion
          cy.get("div[class='example']>p").should('have.contain', 'Congratulations! You must have the proper credentials.')
  
          */
        //Approach-2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        //assertion
        cy.get("div[class='example']>p").should('have.contain', 'Congratulations! You must have the proper credentials.')
    })

})