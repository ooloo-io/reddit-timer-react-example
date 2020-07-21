import React from 'react';
import { string, node } from 'prop-types';
import { Article, Headline, Content } from './Info.style';

function Info({ headline, children }) {
  return (
    <Article>
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
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
