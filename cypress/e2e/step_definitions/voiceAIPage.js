import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import VoiceAIPage from '../../pages/voiceAI.page.js';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore React minified errors
    if (err.message.includes('Minified React error')) {
        return false;
    }
});

Given('I visit Telnyx VoiceAI page', () => {
    VoiceAIPage.visit();
});

Then('I should see "AI voice" on the page', () => {
    VoiceAIPage.verifyTitle();
});

Then('I should see AI voice features', () => {
    VoiceAIPage.verifyFeatures();
});

Then('I should see the voiceAI page footer with links', () => {
    VoiceAIPage.verifyFooter();
});