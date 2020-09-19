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

async function clickFirstCellWithValue(value) {
  const heatmap = await screen.findByTestId('heatmap');
  const cell = within(heatmap).getAllByText(value)[0];
  userEvent.click(cell);
}

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

describe('posts table', () => {
  test('is not visible when no cell is clicked', async () => {
    setup('/search/reactjs');
    await screen.findByTestId('heatmap');

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('is not visible when cell with no posts is clicked', async () => {
    setup('/search/reactjs');
    await clickFirstCellWithValue('0');

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('shows posts ordered by time according to cell that is clicked', async () => {
    setup('/search/reactjs');
    await clickFirstCellWithValue('4');

    const table = screen.getByRole('table');
    const tableRows = within(table)
      .getAllByRole('row')
      .slice(1);

    const tableContent = tableRows.map((row) => {
      const cells = within(row).getAllByRole('cell');
      const titleLink = within(cells[0]).getByRole('link');
      const authorLink = within(cells[4]).getByRole('link');
      return {
        title: titleLink.innerHTML,
        href: titleLink.href,
        time: cells[1].innerHTML,
        score: cells[2].innerHTML,
        numComments: cells[3].innerHTML,
        author: authorLink.innerHTML,
        authorHref: authorLink.href,
      };
    });

    expect(tableContent).toMatchSnapshot();
  });

  test('shows no link for deleted user', async () => {
    setup('/search/reactjs');
    const heatmap = await screen.findByTestId('heatmap');
    const sunday5pm = within(heatmap).getAllByText('6')[1];
    userEvent.click(sunday5pm);

    const table = screen.getByRole('table');
    const rowWithDeletedUser = within(table).getAllByRole('row')[4];

    const authorCell = within(rowWithDeletedUser).getAllByRole('cell')[4];
    expect(within(authorCell).queryByRole('link')).not.toBeInTheDocument();
    expect(authorCell.innerHTML).toBe('[deleted]');
  });
});

test('no accessibility violations', async () => {
  const { container } = setup('/search/reactjs');
  await clickFirstCellWithValue('4');

  expect(await axe(container)).toHaveNoViolations();
});
