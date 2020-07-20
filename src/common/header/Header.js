import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, HeaderLink } from './Header.style';
import { defaultSubreddit } from '../../config';

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <HeaderLink to={`/search/${defaultSubreddit}`}>Search</HeaderLink>
        <HeaderLink to="/#how-it-works">How it works</HeaderLink>
        <HeaderLink to="/#about">About</HeaderLink>
      </nav>
    </Container>
  );
}

export default Header;
