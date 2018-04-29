'use strict';

exports.config = chromeConfig();

function chromeConfig() {
  return {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars', '--headless', '--disable-gpu', '--window-size=800x600'],
      prefs: {
        credentials_enable_service: false,
        profile: {
          password_manager_enabled: false
        }
      }
    },
    sharedTestFiles: true,
    maxInstances: 5,
    requireWindowFocus: false
  };
}
