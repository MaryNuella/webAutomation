export class Login {
    
    
    email(){
        cy.get('#email').clear().type('moayeniko@gmail.com')
    }
    
    password(){
        cy.get('#password').clear().type('fincode46')
    }

    loginButton(){
        cy.get('[type="submit"]').click()
        cy.get('[role="alert"]').should('have.text', 'Login successful')
    }
    
    organizationModule(){
        cy.get('span').contains('Organization').click()
        cy.get('p.mui-1cbp5hz', {timeout:20000}).should('be.visible','have.text', "SYSTEMADMIN")
    }
 
    deactivateAndActivateToggle(){
        cy.get('[type="checkbox"]').eq(0).check()
       cy.get('[type="button"]').contains('Confirm').click()
       cy.get('[role="alert"]').should('be.visible')
cy.wait(20000)
       cy.get('[type="checkbox"]').eq(0).uncheck()
       cy.get('[type="button"]').contains('Confirm').click()
       cy.get('[role="alert"]').should('be.visible')    
    }


    searchOrganization(){
        cy.get('[type="search"]').clear().type('Ais co')
        cy.get('[data-testid="SearchIcon"]').should('be.visible')
        .click()
    }
    
    












    }