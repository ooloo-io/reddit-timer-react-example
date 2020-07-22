import styled from 'styled-components';
import UnstyledButton from '../common/button';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Button = styled(UnstyledButton)`
  margin-top: 42px;
  text-decoration: none;
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
