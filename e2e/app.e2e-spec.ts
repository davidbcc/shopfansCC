import { ShopfansCCPage } from './app.po';

describe('shopfans-cc App', function() {
  let page: ShopfansCCPage;

  beforeEach(() => {
    page = new ShopfansCCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
