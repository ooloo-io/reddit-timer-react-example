import React from 'react';
import { string, node } from 'prop-types';
import { Article, Headline, Content } from './Info.style';

function Info({ id, headline, children }) {
  return (
    <Article id={id}>
      <Headline>
        {headline}
      </Headline>

      <Content>
        {children}
      </Content>
    </Article>
  );
}

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
