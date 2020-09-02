import React from 'react';
import {
  arrayOf,
  func,
  number,
  shape,
} from 'prop-types';
import propTypes from './propTypes';
import { Container, TimezoneWrapper, Timezone } from './Heatmap.style';
import HeatmapHeaderRow from './HeatmapHeaderRow';
import HeatmapRow from './HeatmapRow';

const Heatmap = ({
  postsPerDayAndHour,
  onClickCell,
  selectedCell,
}) => (
  <>
    <Container data-testid="heatmap">
      <HeatmapHeaderRow />

      {postsPerDayAndHour.map((postsPerHour, day) => (
        <HeatmapRow
          // eslint-disable-next-line react/no-array-index-key
          key={day}
          day={day}
          postsPerHour={postsPerHour}
          onClickHour={onClickCell}
          selectedHour={selectedCell?.day === day ? selectedCell.hour : null}
        />
      ))}
    </Container>

    <TimezoneWrapper>
      All times are shown in your timezone:
      {' '}
      <Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
    </TimezoneWrapper>
  </>
);

Heatmap.propTypes = {
  postsPerDayAndHour: arrayOf(arrayOf(arrayOf(propTypes.post))).isRequired,
  onClickCell: func.isRequired,
  selectedCell: shape({
    day: number.isRequired,
    hour: number.isRequired,
  }),
};

Heatmap.defaultProps = {
  selectedCell: null,
};

export default Heatmap;
