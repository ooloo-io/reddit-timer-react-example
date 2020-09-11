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

function Heatmap({ postsPerDay, onClickHour, selectedDayAndHour }) {
  return (
    <>
      <Container data-testid="heatmap">
        <HeatmapHeaderRow />

        {postsPerDay.map((postsPerHour, day) => (
          <HeatmapRow
            // eslint-disable-next-line react/no-array-index-key
            key={day}
            day={day}
            postsPerHour={postsPerHour}
            onClickHour={onClickHour}
            selectedHour={selectedDayAndHour.day === day ? selectedDayAndHour.hour : null}
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
}

Heatmap.propTypes = {
  postsPerDay: arrayOf(arrayOf(arrayOf(propTypes.post))).isRequired,
  onClickHour: func.isRequired,
  selectedDayAndHour: shape({
    day: number,
    hour: number,
  }).isRequired,
};

export default Heatmap;
