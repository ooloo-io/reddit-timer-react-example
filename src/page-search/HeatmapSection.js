import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingContainer, LoadingSpinner, ErrorContainer, Container,
} from './HeatmapSection.style';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';

function HeatmapSection() {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subreddit);
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (hasError) {
    return (
      <ErrorContainer>
        Something went wrong. Please check the subreddit you entered and try again.
      </ErrorContainer>
    );
  }

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];

  return (
    <Container as="section">
      <Heatmap
        postsPerDay={postsPerDay}
        selectedDayAndHour={selectedDayAndHour}
        onClickHour={setSelectedDayAndHour}
      />

      {
        selectedPosts.length > 0 && (
          <PostsTable
            posts={selectedPosts}
          />
        )
      }
    </Container>
  );
}

export default HeatmapSection;
