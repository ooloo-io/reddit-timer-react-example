import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (initialPath = '/') => render(
  <MemoryRouter initialEntries={[initialPath]}>
    <App />
  </MemoryRouter>,
);

test('contains link pointing to ooloo employers page', () => {
  setup();

  const oolooLink = screen.getByRole('link', { name: 'ooloo.io' });
  expect(oolooLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
});

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo-small\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/no reactions to your reddit posts/i)).toBeInTheDocument();
});

test('navigates to terms page when terms link is clicked', () => {
  setup('/search/javascript');

  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);

  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
