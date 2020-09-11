import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingContainer, LoadingSpinner, ErrorContainer, Container,
} from './HeatmapSection.style';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';

function HeatmapSection() {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subreddit);
  const [selectedCell, setSelectedCell] = useState({ day: null, hour: null });

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
        postsPerDay={postsPerDay}
        selectedCell={selectedCell}
        onClickCell={setSelectedCell}
      />
    </Container>
  );
}

export default HeatmapSection;
