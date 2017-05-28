import { ProfilesViewerPage } from './app.po';

describe('profiles-viewer App', () => {
  let page: ProfilesViewerPage;

  beforeEach(() => {
    page = new ProfilesViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
