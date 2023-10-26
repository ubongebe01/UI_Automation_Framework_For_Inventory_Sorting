const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    //dissable chrome security
    chromeWebSecurity: false,

    defaultCommandTimeout: 200000,
    pageLoadTimeout: 50000,
    requestTimeout: 45000,
    requestTimeout: 6500,


"reporter": "cypress-multi-reporters",
"reporterOptions": {
  "reporterDir": "cypress/reporters/mochawesome-report",
  "reporterEnabled":"mochawesome",
  "quite": true,
  "overwrite": true,
  "html": true,
  "json":true
},


  },

  

  
});