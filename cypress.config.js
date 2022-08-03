const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'https://www.globalsqa.com',
      includeShadowDom : true,
      screenshotOnRunFailure : false,
      trashAssetsBeforeRuns : true,
      viewportHeight: 700,
      viewportWidth: 1500,
      video: false,
      trashAssetsBeforeRuns: true,
      videosFolder: "cypress/videos",
      videoUploadOnPasses: false
    },
  component: {
    viewportHeight: 700,
    viewportWidth: 1500,
  }
});