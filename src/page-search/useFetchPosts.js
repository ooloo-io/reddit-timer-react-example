import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export async function fetchPaginatedPosts(previousPosts = [], after = null) {
  let url = 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100';
  if (after) {
    url += `&after=${after}`;
  }

  const response = await fetch(url);
  const { data } = await response.json();
  const allPosts = previousPosts.concat(data.children);

  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  if (noMorePosts || limitReached) {
    return allPosts;
  }

  return fetchPaginatedPosts(allPosts, data.after);
}

function useFetchPosts() {
  const { query } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPaginatedPosts().then((newPosts) => {
      setPosts(newPosts);
      setLoading(false);
    });
  }, [query]);

  return { isLoading, posts };
}

export default useFetchPosts;
