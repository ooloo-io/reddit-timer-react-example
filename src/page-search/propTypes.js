import { shape, string } from 'prop-types';

const post = shape({
  title: string.isRequired,
});

export default {
  post,
};
