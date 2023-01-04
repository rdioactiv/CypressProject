Feature: BookStore Shopping

    Select books
    @Regression
    Scenario: Choose Books and add to profile
    Given Login to Profile
    When Add books to Profile
    And Print Booknames to logs
    Then Delete books from Profile and Logout

    @Smoke 
    Scenario: Filling forms
    Given Open Forms Tab
    When Go to practice form
    And Fill the form
    |firstname| email               |
    |name     | namefirst@gmail.com |
    Then Validate the form