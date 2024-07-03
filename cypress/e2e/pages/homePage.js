class homePage{
    elements={
        lblUser: () => cy.contains('Pepita Perez'),
        lblMessage: () => cy.contains("Password doesn't match")

    }

    verifyUser(){
        this.elements.lblUser().should('be.visible')
    }
    verifyMessage(){
        this.elements.lblMessage().should('be.visible')
    }

}
module.exports = new homePage;