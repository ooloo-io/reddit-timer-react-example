import React from 'react';
import {
  Container, LeftLink, RightLink, Logo,
} from './Footer.style';

function Footer() {
  return (
    <Container>
      <LeftLink as="a" href="https://ooloo.io/employers">
        ooloo.io
      </LeftLink>

      <Logo />

      <RightLink to="/terms">
        Terms & Privacy
      </RightLink>
    </Container>
  );
}

export default Footer;
