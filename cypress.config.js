const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.automationpractice.pl/index.php',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    video: false,
    experimentalRunAllSpecs: true,
  },
});
