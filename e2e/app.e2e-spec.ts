import { AngularQAppPage } from './app.po';

describe('angular-qapp App', () => {
  let page: AngularQAppPage;

  beforeEach(() => {
    page = new AngularQAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
