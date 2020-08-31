import React from 'react';
import { useParams } from 'react-router-dom';
import { LoadingContainer, LoadingSpinner, ErrorContainer } from './Heatmap.style';
import useFetchPosts from './useFetchPosts';

function Heatmap() {
  const { subreddit } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subreddit);

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
    <div>
      {posts.length}
    </div>
  );
}

export default Heatmap;
