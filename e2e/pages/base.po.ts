import { by, element } from 'protractor';

export class BasePage {


    readonly navigationMenu = element(by.id('navigationMenu'));
    readonly linkToSessions = element(by.id('linkToSessions'));
    readonly drillsTab = element(by.css('a[href*="drills"]'));
    readonly activityTab = element(by.css('a[href*="activity"]'));

    goToSessions() {
        return this.linkToSessions.click();
    }
    goToDrills() {
        return this.drillsTab.click();
    }
    goToActivity() {
        return this.activityTab.click();
    }

    /**
     * Set a value into the input element
     * @param el the element
     * @param value the value
     * @returns {ActionSequence | promise.Promise<void>}
     */
    setValue(el, value) {
        // return browser.actions().mouseMove(element).click().sendKeys(value).perform();
        return el.sendKeys(value);
    }
}
