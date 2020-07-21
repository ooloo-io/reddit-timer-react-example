import React from 'react';
import { Section } from './InfoSection.style';
import Info from './Info';

function InfoSection() {
  return (
    <Section>
      <Info id="how-it-works" headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
        <br />
      </Info>

      <Info id="about" headline="About">
        This app was created during a course on
        {' '}
        <a href="https://ooloo.io">ooloo.io</a>
        {' '}
        with the goal to implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull requests and code reviews.
        {' '}
        <a href="https://ooloo.io/employers">Click here for more information.</a>
      </Info>
    </Section>
  );
}

export default InfoSection;
