const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require('../../e2e/pages/loginPage.js');
const HomePage = require('../../e2e/pages/homePage.js')

Given("the user is on the login page", () =>{
    cy.visit('https://test-qa.inlaze.com/')

});
When("he enters the correct credentials",() =>{
    LoginPage.typeEmail("pepita1@gmail.com"),
    LoginPage.typePassword("Pepita123"),
    LoginPage.clickButtonLogin()

});
Then("he should see the home page",() =>{
    HomePage.verifyUser()

});

When("he enters incorrect credentials",() =>{
    LoginPage.typeEmail("pepita1@gmail.com"),
    LoginPage.typePassword("Nolose123"),
    LoginPage.clickButtonLogin()

});
Then("he should see the message incorrect password",() =>{
    HomePage.verifyMessage()



});