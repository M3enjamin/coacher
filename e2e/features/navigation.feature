Feature: Navigation
  As a user
  I want to have a menu always visible
  So that I can navigate to other sections from anywhere in the app

  Scenario: Menu should be visible on the sessions page
    Given I am on the sessions page
    Then I can see the navigation menu

  Scenario: Menu should be visible on the sessions page
    Given I am on the sessions page
    When I click on the drills menu
    Then I should be on the drills screen
