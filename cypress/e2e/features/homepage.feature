Feature: Telnyx Homepage loading
  Scenario: Telnyx homepage title
    Given I visit Telnyx homepage
    Then I should see "Experience" on the page

  Scenario: Telnyx homepage menu links
    Given I visit Telnyx homepage
    Then I should see essential menu links

  Scenario: Telnyx homepage title
    Given I visit Telnyx homepage
    Then I should see the title of the page

  Scenario: Telnyx homepage footer
    Given I visit Telnyx homepage
    Then I should see the footer with links

  Scenario: Telnyx homepage navigation
    Given I visit Telnyx homepage
    Then I should see the navigation bar with links

  Scenario: Telnyx homepage different resolutions
    Given I visit Telnyx homepage
    Then I should see or not see main menu dependding on viewport resolution
