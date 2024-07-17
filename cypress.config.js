const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config){
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/login.js'
  },
  pageLoadTimeout: 120000,
});
