Feature: Sign Up

    Scenario: Sign Up Successfull
        Given the user is on the login page
        When he select option Sign Up and enters the information correctly
        Then he should register correctly
    
    Scenario: passwords do not match in registry
        Given the user is on the login page
        When he select option Sign Up and enters the information with diferent passwords
        Then he should see the message