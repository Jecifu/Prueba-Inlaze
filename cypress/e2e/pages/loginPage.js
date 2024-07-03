class loginPage{
    elements={
        txtEmail: () => cy.get("#email"),
        txtPassword: () => cy.get("input#password"),
        btnLogin: () => cy.get("button[type='submit']"),
        btnSingUp: () => cy.get(".text-center > .font-bold")
        
    }

    typeEmail(email){
        this.elements.txtEmail().type(email)
    }

    typePassword(password){
        this.elements.txtPassword().type(password)
    }

    clickButtonLogin(){             
        this.elements.btnLogin().click()
    }
    clickButtonSignUp(){             
        this.elements.btnSingUp().click()
    }

}

module.exports = new loginPage();