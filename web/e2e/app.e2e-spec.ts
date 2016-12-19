import { Demo1WebPage } from './app.po';

describe('demo1-web App', function() {
  let page: Demo1WebPage;

  beforeEach(() => {
    page = new Demo1WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
