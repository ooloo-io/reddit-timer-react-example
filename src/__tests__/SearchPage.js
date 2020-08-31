import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { defaultSubreddit } from '../config';

const setup = (initialPath = '/') => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
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

test('loads top posts for subreddit in URL', async () => {
  setup('/search/reactjs');

  screen.getByText('loading-spinner.svg');

  expect(await screen.findByText('500')).toBeInTheDocument();
  expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();
});

test('renders error message', async () => {
  setup('/search/failing-request');
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});

test('submitting the form updates the URL', () => {
  const { history } = setup('/search/reactjs');

  const searchInput = screen.getByLabelText('r /');
  expect(searchInput.value).toBe('reactjs');

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'vuejs');
  expect(searchInput.value).toBe('vuejs');

  const submitButton = screen.getByRole('button', { name: 'Search' });
  userEvent.click(submitButton);

  expect(history.location.pathname).toEqual('/search/vuejs');
});

test('input value changes to default subreddit when search link in header is clicked', () => {
  setup('/search/reactjs');
  const searchInput = screen.getByRole('textbox');
  const header = screen.getByRole('banner');
  const searchLink = within(header).getByRole('link', { name: /Search/ });

  userEvent.click(searchLink);

  expect(searchInput.value).toBe(defaultSubreddit);
});
