import { GiveAwayPage } from './app.po';

describe('give-away App', () => {
  let page: GiveAwayPage;

  beforeEach(() => {
    page = new GiveAwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
