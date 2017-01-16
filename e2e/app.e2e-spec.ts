import { SandboxComponentsPage } from './app.po';

describe('sandbox-components App', function() {
  let page: SandboxComponentsPage;

  beforeEach(() => {
    page = new SandboxComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
