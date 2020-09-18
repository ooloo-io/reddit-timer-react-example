import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props) => props.theme.size.heatmap.headerHeight}px;
  margin-left: ${(props) => props.theme.size.heatmap.dayWidth}px;
  display: flex;
  align-items: center;
  border: solid 1px ${(props) => props.theme.color.heatmap.headerBorder};
  background-image: ${(props) => props.theme.color.heatmap.headerBackground};
`;

export const Hour = styled.div`
  width: ${(props) => props.theme.size.heatmap.hour * 2}px;
  text-align: center;
  color: ${(props) => props.theme.color.heatmap.headerHour};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
`;
