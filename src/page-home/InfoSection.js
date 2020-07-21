import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

function InfoSection() {
  return (
    <section>
      <Info headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
        <br />
      </Info>

      <Info headline="About">
        This app was created during a course on
        {' '}
        <Link to="https://ooloo.io">ooloo.io</Link>
        {' '}
        with the goal to implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull requests and code reviews.
        {' '}
        <Link to="https://ooloo.io/employer">Click here for more information.</Link>
      </Info>
    </section>
  );
}

export default InfoSection;
