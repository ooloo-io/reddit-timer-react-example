
import { number, shape, string } from 'prop-types';

const post = shape({
  createdAt: number.isRequired,
  title: string.isRequired,
  score: number.isRequired,
  author: string.isRequired,
  authorId: string, // undefined if user has been deleted
});

export default {
  post,
};
