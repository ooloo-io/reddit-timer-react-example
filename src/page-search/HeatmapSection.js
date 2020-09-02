import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingContainer, LoadingSpinner, ErrorContainer, Container } from './HeatmapSection.style';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';

function HeatmapSection() {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDayAndHour } = useFetchPosts(subreddit);
  // handle edge case where cell is selected and new subreddit is entered (propbably the table is still shown currently)
  const [selectedDayAndHour, setSelectedDayAndHour] = useState(null);

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

  return (
    <Container as="section">
      <Heatmap
        postsPerDayAndHour={postsPerDayAndHour}
        selectedCell={selectedDayAndHour}
        onClickCell={setSelectedDayAndHour}
      />
    </Container>
  );
}

export default HeatmapSection;
