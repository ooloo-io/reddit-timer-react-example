import React from 'react';
import { string, node } from 'prop-types';
import { Container, Headline, Content } from './Info.style';

function Info({ id, headline, children }) {
  return (
    <Container as="article" id={id}>
      <Headline>
        {headline}
      </Headline>

      <Content>
        {children}
      </Content>
    </Container>
  );
}

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
