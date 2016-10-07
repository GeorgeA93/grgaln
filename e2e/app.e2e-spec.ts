import { GrgalnPage } from './app.po';

describe('grgaln App', function() {
  let page: GrgalnPage;

  beforeEach(() => {
    page = new GrgalnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
