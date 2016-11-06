import { Angular2Auth0Page } from './app.po';

describe('angular2-auth0 App', function() {
  let page: Angular2Auth0Page;

  beforeEach(() => {
    page = new Angular2Auth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
