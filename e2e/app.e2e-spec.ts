import { GrgalnPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('grgaln App', function () {
  let page: GrgalnPage;

  beforeEach(() => {
    page = new GrgalnPage();
    browser.ignoreSynchronization = true;
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });

  it('should show home page with correct background image', () => {
    browser.get('/');
    let siteWrapper = element(by.css('.site-wrapper'));
    let background = siteWrapper.getCssValue('background-image');
    expect(background).toEqual('url("http://localhost:4200/assets/nightsky.jpg")');
  });

  it('should show home page title', () => {
    browser.get('/');
    let header = element(by.css('h1')).getText();
    expect(header).toBeTruthy();
  });

  it('should navigate to projects', () => {
    browser.get('/');
    let button = element(by.css('a'));
    button.click().then(() => {
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/projects");
    });
  });

  it('should display some projects', () => {
    browser.get('/projects');
    browser.sleep(2000); // TODO is this the best way to do it??
    let projects = element.all(by.css('app-project-item'));
    expect(projects.count()).toBeGreaterThan(2);
  });

});
