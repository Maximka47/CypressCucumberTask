Feature: Telnyx Contact Us Page loading

  Scenario: Telnyx Contact Us page title
    Given I visit Telnyx Contact Us page
    Then I should see "Talk to an expert" on the page

  Scenario: Telnyx Contact Us page related resources
    Given I visit Telnyx Contact Us page
    Then I should see related resources on the page

  Scenario: Telnyx Contact Us page footer
    Given I visit Telnyx Contact Us page
    Then I should see the contact us page footer with links