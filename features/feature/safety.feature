Feature: User on safety page of volvo cars

  Background:
    Given User is on the safety page

  Scenario: As a user, User should see introduction on safety page
    And User accept cookies
    Then User should see safety intro paragraph

  Scenario: As a user, user should scroll to safety features and see details
    When User scroll to safety features
    Then User should see safety features and details

  Scenario Outline: As a user, user should scroll to zero collisions and see details
    When User scroll to safety features
    Then User should see <title> feature <detail>
  Examples:
    | title           | detail |
    | Zero collisions | The next level of safety relies on advanced technology. Therefore, we constantly strive to raise safety levels towards our new vision, which is an ambition to have no collisions at all. |
