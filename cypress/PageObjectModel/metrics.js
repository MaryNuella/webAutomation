export class metrics{

metrics(){
    cy.get('.mui-1bzo8b5').contains('Metrics').trigger('mouseover').should('be.visible')
    cy.get('.mui-jq8y8u').should('be.visible')
    .contains("Metrics").click()
    cy.get('h5.mui-1l9hch1').should('have.text','Summary')
    cy.get('h6.mui-1q1z7q5').eq(0).should('have.text','Transactions')
    cy.get('p.mui-1igm5rv').eq(1).should('have.text','Activity')
    cy.get('p.mui-1igm5rv').eq(2).should('have.text','PROCESSING STAGES')
    cy.get('p.mui-1igm5rv').eq(5).should('have.text','EXECUTE TRANSACTION STATISTICS')
}


exportAs(){
   cy.get('[data-testid="PictureAsPdfIcon"]').should('be.visible').click()
   // cy.get('p.mui-1igm5rv').eq(0).should('have.text','Export As:').click()
}


















}