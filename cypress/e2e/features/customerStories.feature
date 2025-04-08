Feature: Telnyx Customer Stories page loading

  Scenario: Telnyx Customer Stories page title
    Given I visit Telnyx Customer Stories page
    Then I should see "Customer Stories" on the page

  Scenario: Telnyx Customer Stories page customer stories
    Given I visit Telnyx Customer Stories page
    Then I should see customer stories on the page

  Scenario: Telnyx Customer Stories page footer
    Given I visit Telnyx Customer Stories page
    Then I should see the customer stories page footer with links