import { browser } from 'protractor';
import * as chai from 'chai';
import { BasePage } from '../../pages/base.po';
import { SessionsPage } from '../../pages/sessions.po';
import { DrillsPage } from '../../pages/drills.po';

const { Given, When, Then } = require('cucumber');
const pages = {
    'sessions': { path: 'sessions', pageObject: new SessionsPage() },
    'drills': { path: 'drills', pageObject: new DrillsPage() },
};

Given(/^I am on the (.*) page$/, (page: string, done: any) => {
    browser.get('/' + pages[page].path).then(() => {
        console.log('GOING TO : ', page);
        done();
    });
});

