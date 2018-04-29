'use strict';
const { browser, by, element } = require('protractor');
const { BeforeAll, After, Status, setDefaultTimeout } = require('cucumber');

/**
 * Go the angular starter page before to start each test
 */
BeforeAll({ timeout: 10 * 1000 }, async () => {
  await browser.get(config.baseUrl);
});

/**
 * Logout after finish the execution of each test to start from initial application state
 */
// After(function (scenario) {
//     if (scenario.result.status === Status.FAILED) {
//         const attach = this.attach; // cucumber's world object has attach function which should be used
//         return browser.takeScreenshot().then(function (png) {
//             const decodedImage = new Buffer(png, "base64");
//             return attach(decodedImage, "image/png");
//         });
//     }
// });
