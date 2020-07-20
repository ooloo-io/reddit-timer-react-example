import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 119px;
  padding: 0 20px;
`;

export const Headline = styled.h1`
  margin: 19px 0 0;
`;

export const Subline = styled.h2`
  margin: 6px 0 0;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
  letter-spacing: ${(props) => props.theme.font.letterSpacing.default};
`;

export const Button = styled(Link)`
  height: 36px;
  line-height: 36px;
  margin-top: 42px;
  padding: 0 16px;
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
  color: ${(props) => props.theme.color.light};
  background: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
`;

export const DefaultSubreddit = styled.div`
  margin-top: 42px;
  font-weight: 500;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1114px;
  margin-top: 32px;
`;
