import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.theme.size.heatmap.width}px;
  margin: auto;
`;

export const TimezoneWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: ${(props) => props.theme.font.size.small};
  text-align: center;
`;

export const Timezone = styled.span`
  font-weight: 600;
`;
