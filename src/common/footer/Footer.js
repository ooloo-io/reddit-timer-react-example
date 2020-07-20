import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, LeftLink, RightLink, Logo,
} from './Footer.style';

function Footer() {
  return (
    <Container>
      <LeftLink as="a" href="https://ooloo.io/employers">
        ooloo.io
      </LeftLink>

      <Link to="/">
        <Logo />
      </Link>

      <RightLink to="/terms">
        Terms & Privacy
      </RightLink>
    </Container>
  );
}

export default Footer;
