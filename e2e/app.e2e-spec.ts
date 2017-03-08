import { OnlineUrlParserPage } from './app.po';

describe('online-url-parser App', () => {
  let page: OnlineUrlParserPage;

  beforeEach(() => {
    page = new OnlineUrlParserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
