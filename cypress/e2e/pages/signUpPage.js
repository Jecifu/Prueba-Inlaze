class signUpPage {
    elements={
        txtFullName: () => cy.get("#full-name"),
        txtEmail: () => cy.get("#email"),
        txtPassword: () => cy.get("input#password"),
        txtConfirmPassword: () => cy.get("input#confirm-password"),
        btnSingUp: () => cy.get("button[type='submit']"),
        lblRegistration: () => cy.contains('Successful registration'),
        lblMessage: () => cy.contains("Passwords do not match")

    }
    typeFullName(FullName){
        this.elements.txtFullName().type(FullName)
    }
    typeEmail(email){
        this.elements.txtEmail().type(email)
    }
    typePassword(password){
        this.elements.txtPassword().type(password)
    }
    typeConfirmPassword(ConfirmPassword){
        this.elements.txtConfirmPassword().type(ConfirmPassword)
    }
    clickButtonSigUp(){             
        this.elements.btnSingUp().click()
    }
    verifyRegistration(){
        this.elements.lblRegistration().should('be.visible')
    }
    verifyMessage(){
        this.elements.lblMessage().should('be.visible')
    }
}
module.exports = new signUpPage();