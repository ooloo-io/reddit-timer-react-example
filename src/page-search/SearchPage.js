import React from 'react';
import { Section, Headline } from './SearchPage.style';
import SubredditForm from './SubredditForm';

function SearchPage() {
  return (
    <>
      <Section as="section">
        <Headline>
          Find the best time for a subreddit
        </Headline>

        <SubredditForm />
      </Section>
    </>
  );
}

export default SearchPage;
