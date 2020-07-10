import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('info-section')('Info Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Contains links to ooloo.io/employers', () => {
    cy.contains(/This app was created during a course/)
      .contains('ooloo.io')
      .and('have.attr', 'href')
      .and('eq', 'https://ooloo.io/employers');

    cy.contains(/This app was created during a course/)
      .contains(/Click here for more information/)
      .and('have.attr', 'href')
      .and('eq', 'https://ooloo.io/employers');
  });

  it('Scrolls to "How it works" when clicking link in header', () => {
    cy.get('header')
      .contains('How it works')
      .click();
    cy.window().then(($window) => {
      // scroll should be greater than any number
      expect($window.scrollY).to.be.greaterThan(10);
    });
  });

  it('Scrolls to "About" when clicking link in header', () => {
    cy.get('header')
      .contains('About')
      .click();
    cy.window().then(($window) => {
      // scroll should be greater than any number
      expect($window.scrollY).to.be.greaterThan(10);
    });
  });
});
