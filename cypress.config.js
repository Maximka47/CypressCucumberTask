const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://telnyx.com',
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config, {
        json: {
          enabled: true,
          output: path.join(__dirname, "report", "cucumber-report.json"), // THIS is the file you want
        }
      });
      console.log("✅ Cucumber plugin loaded with JSON output");

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});