import React from 'react';
import { Container, Headline } from './FormSection.style';
import SubredditForm from './SubredditForm';

const FormSection = () => (
  <Container as="section">
    <Headline>
      Find the best time for a subreddit
    </Headline>

    <SubredditForm />
  </Container>
);

export default FormSection;
