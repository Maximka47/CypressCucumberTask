const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/generate-reports/',
    reportPath: 'cypress/generate-reports/html',
    metadata: {
        browser: {
            name: 'chrome',
            version: 'XX',
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '20.04',
        },
    },
});