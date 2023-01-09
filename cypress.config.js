const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  projectId: "fk2v8h",
  pageLoadTimeout: 30000,
});

module.exports = require.config({
  resolve: {
    paths: {
      "@cypress/*": ["../../cypress/*"]
    }
  },
});


