import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    letter-spacing: ${(props) => props.theme.font.letterSpacing.default};
    color: ${(props) => props.theme.color.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.dark};
    font-family: ${(props) => props.theme.font.family.headline};
    font-weight: normal;
    letter-spacing: ${(props) => props.theme.font.letterSpacing.heading};
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.large};
  }
`;

export default GlobalStyle;
