import { browser, by, element, ElementFinder, promise } from 'protractor';
import { BasePage } from './base.po';
import { testHelpers } from '../support/utils';

export class DrillsPage extends BasePage {
  readonly drillItems = element(by.css('.drill-item'));
}
