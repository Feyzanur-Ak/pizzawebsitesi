import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",  // Test dosyanızın bulunduğu dizini belirtin
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
