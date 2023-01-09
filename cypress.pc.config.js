const { defineConfig, cypress } = require('cypress');
const { pickTestFiles } = require('./test-file.js');
const { files: spec } = pickTestFiles();

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 30000,
  viewportWidth: 1440,
  viewportHeight: 860,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 E2E/sourcing",
  trashAssetsBeforeRuns: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: spec,
  },
  compilerOptions: {
    "paths": {
      "@cypress/*": ["cypress/*"]
    },
  }
});
