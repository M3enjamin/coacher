import {browser} from 'protractor';
import {SessionsPage} from '../../pages/sessions.po';
import {DrillsPage} from '../../pages/drills.po';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();
export const expect = chai.expect;
export const assert = chai.assert;
export const should = chai.should();

const { Given, When, Then } = require('cucumber');
const pages = {
  sessions: { path: 'sessions', pageObject: new SessionsPage() },
  drills: { path: 'drills', pageObject: new DrillsPage() }
};

Given(/^I am on the (.*) page$/, (page: string, done: any) => {
  browser.get('/' + pages[page].path).then(() => {
    done();
  });
});

Then(/^I should be on the drills screen$/, (done: any) => {
  expect(new DrillsPage().drillItems.isDisplayed()).to.eventually.be.true.and.notify(done);
});
