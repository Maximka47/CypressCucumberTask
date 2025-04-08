Feature: Telnyx VoiceAI Page loading
  Scenario: Telnyx VoiceAI page title
    Given I visit Telnyx VoiceAI page
    Then I should see "AI voice" on the page

  Scenario: Telnyx VoiceAI page Features
    Given I visit Telnyx VoiceAI page
    Then I should see AI voice features

  Scenario: Telnyx VoiceAI page footer
    Given I visit Telnyx VoiceAI page
    Then I should see the voiceAI page footer with links