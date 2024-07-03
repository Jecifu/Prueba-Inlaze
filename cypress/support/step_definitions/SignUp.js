const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");
const SignUpPage = require('../../e2e/pages/signUpPage.js');
const LoginPage = require('../../e2e/pages/loginPage.js')

When("he select option Sign Up and enters the information correctly",() =>{
    LoginPage.clickButtonSignUp(),
    SignUpPage.typeFullName("Pepita Perez"),
    SignUpPage.typeEmail("pepita1@gmail.com"),
    SignUpPage.typePassword("Pepita123"),
    SignUpPage.typeConfirmPassword("Pepita123"),
    SignUpPage.clickButtonSigUp()

});

Then("he should register correctly",() =>{
    SignUpPage.verifyRegistration()

});

When("he select option Sign Up and enters the information with diferent passwords",() =>{
    LoginPage.clickButtonSignUp(),
    SignUpPage.typeFullName("Pepita Perez"),
    SignUpPage.typeEmail("pepita1@gmail.com"),
    SignUpPage.typePassword("Pepita123"),
    SignUpPage.typeConfirmPassword("Nolose123")        
    
});

Then("he should see the message",() =>{
    SignUpPage.verifyMessage()

});
