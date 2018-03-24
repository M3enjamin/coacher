import {BasePage} from '../../pages/base.po';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

export const expect = chai.expect;
export const assert = chai.assert;
export const should = chai.should();

const basePage = new BasePage();

const { Given, When, Then } = require('cucumber');

When(/^I click on the drills menu$/, (done: any) => {
  basePage.goToDrills();
  done();
});

Then(/^I can see the navigation menu$/, (done: any) => {
  expect(basePage.navigationMenu.isDisplayed()).to.eventually.be.true.and.notify(done);
});
