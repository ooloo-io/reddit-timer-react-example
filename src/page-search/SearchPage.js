import React from 'react';
import { Container, Headline } from './SearchPage.style';
import SubredditForm from './SubredditForm';
import HeatmapSection from './HeatmapSection';

function SearchPage() {
  return (
    <Container as="section">
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <SubredditForm />
      <HeatmapSection />
    </Container>
  );
}

export default SearchPage;
