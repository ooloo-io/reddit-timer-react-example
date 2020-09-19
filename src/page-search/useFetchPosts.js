import { useEffect, useState } from 'react';

const NUM_POSTS_TO_FETCH = 500;
const MAX_NUM_POSTS_PER_PAGE = 100;

/**
 * The reddit endpoint that we fetch the top posts from uses pagination. We can fetch a maximum
 * number of 100 posts per page. In order to fetch the first 500 posts we use this recursive
 * function. Until the last page or the required number of posts has been reached we continue
 * to fetch more posts.
 *
 * @param {string} subreddit the name of the subreddit
 * @param {array} previousPosts the posts that have already been loaded
 *    (only to be used in recursive calls)
 * @param {string} after the id of the last post used for pagination
 *    (only to be used in recursive calls)
 * @returns {array} list of top 500 posts for subreddit
 */
export async function fetchPaginatedPosts(subreddit, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=${MAX_NUM_POSTS_PER_PAGE}`;
  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url);
  const { data } = await response.json();
  const allPosts = previousPosts.concat(data.children);

  const noMorePosts = data && data.dist < MAX_NUM_POSTS_PER_PAGE;
  const limitReached = allPosts.length >= NUM_POSTS_TO_FETCH;
  if (noMorePosts || limitReached) {
    return allPosts;
  }

  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

/**
 * Builds an object containing posts per day of week and hour to create the heatmap.
 * Each entry obj[dayOfWeek][hour] contains an array of posts.
 * dayOfWeek is a number between 0 and 6, hour a number between 0 and 23.
 *
 * @param {array} posts the concatenated list of posts returned from fetchPaginatedPosts
 * @returns {array} nested 3D array that contains the posts grouped by week day and hour
 */
function groupPostsPerDayAndHour(posts) {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill().map(() => []));

  posts.forEach((post) => {
    const createdAtDate = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAtDate.getDay();
    const hour = createdAtDate.getHours();

    postsPerDay[dayOfWeek][hour].push({
      createdAt: createdAtDate,
      title: post.data.title,
      url: `https://reddit.com${post.data.permalink}`,
      score: post.data.score,
      numComments: post.data.num_comments,
      author: post.data.author,
      authorId: post.data.author_fullname,
    });
  });

  return postsPerDay;
}

function useFetchPosts(subreddit) {
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus('pending');

    fetchPaginatedPosts(subreddit)
      .then((posts) => groupPostsPerDayAndHour(posts))
      .then((newpostsPerDay) => {
        setPostsPerDay(newpostsPerDay);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [subreddit]);

  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    postsPerDay,
  };
}

export default useFetchPosts;
