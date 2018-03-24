'use strict';
const config = require('./protractor.shared.conf').config;
const chrome = require('./e2e/config/browsers/chrome.config').config;

config.baseUrl = 'https://coacher-a6023.firebaseapp.com/';

chrome.directConnect = true;

config.capabilities = chrome;

exports.config = config;
