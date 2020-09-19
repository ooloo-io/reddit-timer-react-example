import React from 'react';
import { string } from 'prop-types';
import { Link } from './PostsTable.style';

function PostAuthor({ author }) {
  if (author === '[deleted]') {
    return author;
  }

  return (
    <Link
      href={`https://reddit.com/u/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </Link>
  );
}

PostAuthor.propTypes = {
  author: string.isRequired,
};

export default PostAuthor;
