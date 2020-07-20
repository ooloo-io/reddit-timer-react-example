import React from 'react';
import { Link } from 'react-router-dom';
import {
  Section, Headline, Subline, Button, DefaultSubreddit, Image,
} from './HeroSection.style';
import { defaultSubreddit } from '../config';

const HeroSection = () => (
  <Section>
    <Headline>
      No reactions to your reddit posts?
    </Headline>

    <Subline>
      Great timing, great results! Find the best time to post on your subreddit.
    </Subline>

    <Button to={`/search/${defaultSubreddit}`}>
      Show me the best time
    </Button>

    <DefaultSubreddit>
      r/
      {defaultSubreddit}
    </DefaultSubreddit>

    <Link to={`/search/${defaultSubreddit}`}>
      <Image
        src="/heatmap@2x.png"
        srcSet="/heatmap.png, /heatmap@2x.png 2x, /heatmap@3x.png 3x"
        alt="Screenshot of heatmap"
      />
    </Link>
  </Section>
);

export default HeroSection;
