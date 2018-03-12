import { BasePage } from '../../pages/base.po';
import { element, by, browser } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

export const expect = chai.expect;
export const assert = chai.assert;
export const should = chai.should();

const basePage = new BasePage();

const { Given, When, Then } = require('cucumber');


Then(/^I can see the navigation menu$/, (done: any) => {
  browser.debugger();
    expect(basePage.navigationMenu.isDisplayed()).to.eventually.be.true.and.notify(done);
});

