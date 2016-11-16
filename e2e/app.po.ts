import { browser, element, by } from 'protractor';

export class GrgalnPage {
  navigateTo() {
    return browser.get('/');
  }

  getBackgroundImage() {
    return element(by.css('img'));
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
