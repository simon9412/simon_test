const cypress = require('cypress');
const { pickTestFiles } = require('./test-file.js');
const { files: spec } = pickTestFiles();

async function runTests() {
  await cypress.run({
    reporter: 'junit',
    browser: 'chrome',
    chromeWebSecurity: false,
    configFile: `cypress.pc.config.js`,
    supportFile: `cypress.pc.config.js`,
    spec: spec,
  }).then((results) => {
    console.log(results);
  }).catch((err) => {
    console.error(err);
  });
}


(async function () {
  try {
    await runTests();
  } catch (e) {
    console.log(e);
  }
})();