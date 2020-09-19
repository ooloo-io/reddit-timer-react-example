import React from 'react';
import { arrayOf } from 'prop-types';
import {
  Container,
  Headline,
  Table,
  Row,
  HeaderColumn,
  Column,
  TitleColumn,
  AuthorColumn,
  Link,
} from './PostsTable.style';
import propTypes from './propTypes';
import PostAuthor from './PostAuthor';

function sortPosts(posts) {
  return [...posts].sort((a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes());
}

function getDisplayTime({ createdAt }) {
  return createdAt
    .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    .toLowerCase();
}

function PostsTable({ posts }) {
  return (
    <Container>
      <Headline>
        Posts
      </Headline>

      <Table>
        <thead>
          <Row>
            <HeaderColumn>Title</HeaderColumn>
            <HeaderColumn>Time Posted</HeaderColumn>
            <HeaderColumn>Score</HeaderColumn>
            <HeaderColumn>Comments</HeaderColumn>
            <HeaderColumn>Author</HeaderColumn>
          </Row>
        </thead>

        <tbody>
          {
            sortPosts(posts).map((post) => (
              <Row key={post.url}>
                <TitleColumn>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </Link>
                </TitleColumn>
                <Column>
                  {getDisplayTime(post)}
                </Column>
                <Column>
                  {post.score}
                </Column>
                <Column>
                  {post.numComments}
                </Column>
                <AuthorColumn>
                  <PostAuthor author={post.author} />
                </AuthorColumn>
              </Row>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

PostsTable.propTypes = {
  posts: arrayOf(propTypes.post).isRequired,
};

export default PostsTable;
