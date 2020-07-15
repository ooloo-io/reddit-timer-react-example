import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = () => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  render(
    <MemoryRouter history={history}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test('navigates to home page when logo is clicked', () => {
  const { history } = setup();
  history.push('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test.each`
  link              | hash
  ${'About'}        | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section when "$link" link is clicked', ({ link, hash }) => {
  const { history } = setup();
  history.push('/search/javascript');

  const aboutLink = screen.getByRole('link', { name: link });
  userEvent.click(aboutLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});