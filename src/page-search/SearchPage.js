import React from 'react';
import { Container, Headline } from './SearchPage.style';
import SubredditForm from './SubredditForm';

function SearchPage() {
  return (
    <Container as="section">
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <SubredditForm />
    </Container>
  );
}

export default SearchPage;
