Feature: Login 

    Scenario: Login Successfull
        Given the user is on the login page
        When he enters the correct credentials
        Then he should see the home page

    Scenario: Login failed for incorrect password 
        Given the user is on the login page
        When he enters incorrect credentials
        Then he should see the message incorrect password
    
    