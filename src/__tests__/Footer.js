import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
};

test('contains link pointing to ooloo employers page', () => {
  const { footer } = setup();

  const oolooLink = within(footer).getByRole('link', { name: 'ooloo.io' });
  expect(oolooLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
});

test('navigates to home page when logo is clicked', () => {
  const { footer } = setup('/search/javascript');

  const logoLink = within(footer).getByRole('link', { name: /logo-small\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/no reactions to your reddit posts/i)).toBeInTheDocument();
});

test('navigates to terms page when terms link is clicked', () => {
  const { footer } = setup('/search/javascript');

  const termsLink = within(footer).getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);

  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
