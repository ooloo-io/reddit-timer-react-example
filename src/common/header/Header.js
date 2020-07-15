import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, HeaderLink } from './Header.style';

const Header = () => (
  <Container>
    <Link to="/">
      <Logo />
    </Link>

    <nav>
      <HeaderLink to="/search/javascript">Search</HeaderLink>
      <HeaderLink to="/#how-it-works">How it works</HeaderLink>
      <HeaderLink to="/#about">About</HeaderLink>
    </nav>
  </Container>
);

export default Header;