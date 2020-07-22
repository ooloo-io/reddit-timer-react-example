import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

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

describe('Hero section', () => {
  test('navigates to search page when button is clicked', () => {
    const { history } = setup();

    const ctaButton = screen.getByRole('link', { name: /show me the best time/i });
    userEvent.click(ctaButton);

    expect(screen.getByText(/find the best time for a subreddit/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });

  test('navigates to search page when heatmap image is clicked', () => {
    const { history } = setup();

    const heatmapImage = screen.getByAltText(/screenshot of heatmap/i);
    userEvent.click(heatmapImage);

    expect(screen.getByText(/find the best time for a subreddit/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });
});

describe('Info section', () => {
  test('contains links pointing to ooloo home and employers page', () => {
    setup();

    const aboutSection = screen.getAllByRole('article')[1];

    const oolooLink = within(aboutSection).getByRole('link', { name: /ooloo\.io/i });
    expect(oolooLink.getAttribute('href')).toEqual('https://ooloo.io');

    const moreInfoLink = within(aboutSection).getByRole('link', { name: /click here for more information/i });
    expect(moreInfoLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
  });
});
