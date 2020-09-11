import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render, screen, within, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import App from '../app';
import { defaultSubreddit } from '../config';

const setup = (initialPath) => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  const view = render(
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
  return { ...view, history };
};

describe('subreddit form', () => {
  test('submitting the form updates the URL', async () => {
    const { history } = setup('/search/reactjs');

    const searchInput = screen.getByLabelText('r /');
    expect(searchInput.value).toBe('reactjs');

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'vuejs');
    expect(searchInput.value).toBe('vuejs');

    const submitButton = screen.getByRole('button', { name: 'Search' });
    userEvent.click(submitButton);

    expect(history.location.pathname).toEqual('/search/vuejs');

    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());
  });

  test('input value changes to default subreddit when search link in header is clicked', async () => {
    setup('/search/reactjs');
    const searchInput = screen.getByRole('textbox');
    const header = screen.getByRole('banner');
    const searchLink = within(header).getByRole('link', { name: /Search/ });

    userEvent.click(searchLink);

    expect(searchInput.value).toBe(defaultSubreddit);

    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());
  });
});

describe('heatmap', () => {
  test('loads and renders top posts for subreddit in URL', async () => {
    setup('/search/reactjs');

    screen.getByText('loading-spinner.svg');

    expect(await screen.findByTestId('heatmap')).toBeInTheDocument();
    expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();

    const heatmap = screen.getByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');
    expect(cells.length).toEqual(7 * 24);

    const numberOfPostsPerCell = cells.map((cell) => cell.innerHTML);
    expect(numberOfPostsPerCell).toMatchSnapshot();

    const timezone = screen.getByText('All times are shown in your timezone:');
    expect(within(timezone).getByText('Europe/Berlin')).toBeInTheDocument();
  });

  test('cell highlights on click', async () => {
    setup('/search/reactjs');
    const heatmap = await screen.findByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');

    const cellToClick = cells[1];
    expect(cellToClick).toHaveStyle('border: none');

    userEvent.click(cellToClick);
    expect(cellToClick).toHaveStyle('border: 1px solid #1e2537');
  });

  test('renders error message', async () => {
    setup('/search/failing-request');

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();
  });
});

test('no accessibility violations', async () => {
  const { container } = setup('/search/reactjs');

  expect(await screen.findByTestId('heatmap')).toBeInTheDocument();
  expect(await axe(container)).toHaveNoViolations();
});
