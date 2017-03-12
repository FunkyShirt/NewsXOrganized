import { NewsXPage } from './app.po';

describe('news-x App', () => {
  let page: NewsXPage;

  beforeEach(() => {
    page = new NewsXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
