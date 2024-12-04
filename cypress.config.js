import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // Adjust this to where your test files are located
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

