const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: 'https://someDummyLinkThatDoesNotExist.netlify.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
