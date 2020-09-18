import styled, { css } from 'styled-components';

const getBackgroundColor = ({ numPosts, theme }) => {
  const backgroundColors = theme.color.heatmap.hourBackground;

  if (numPosts >= backgroundColors.length) {
    return backgroundColors[backgroundColors.length - 1];
  }

  return backgroundColors[numPosts];
};

export const Container = styled.div`
  display: flex;
`;

export const Weekday = styled.div`
  width: ${(props) => props.theme.size.heatmap.dayWidth}px;
  height: ${(props) => props.theme.size.heatmap.hour}px;
  line-height: ${(props) => props.theme.size.heatmap.hour}px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.heatmap.dayBackground};
`;

const highlighted = css`
  border: solid 1px ${(props) => props.theme.color.heatmap.hourHoverBorder};
  line-height: ${(props) => props.theme.size.heatmap.hour - 2}px;
`;

export const Hour = styled.button`
  width: ${(props) => props.theme.size.heatmap.hour}px;
  height: ${(props) => props.theme.size.heatmap.hour}px;
  line-height: ${(props) => props.theme.size.heatmap.hour}px;
  text-align: center;
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => getBackgroundColor(props)};
  cursor: pointer;
  border: none;
  border-radius: 0;

  ${(props) => props.selected && highlighted}

  :hover, :focus {
    outline: none;
    ${highlighted}
  }
`;
