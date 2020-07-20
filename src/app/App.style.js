import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContentContainer = styled.main`
  min-height: ${(props) => `calc(100vh - ${props.theme.size.headerHeight} - ${props.theme.size.footerHeight})`};
`;
