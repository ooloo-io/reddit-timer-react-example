import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import propTypes from './propTypes';
import { Container, Weekday, Hour } from './HeatmapRow.style';

const weekdays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

function HeatmapRow({
  day,
  postsPerHour,
  onClickHour,
  selectedHour,
}) {
  return (
    <Container>
      <Weekday>{weekdays[day]}</Weekday>

      {
        postsPerHour.map((posts, hour) => {
          const numPosts = (posts || []).length;
          return (
            <Hour
              // eslint-disable-next-line react/no-array-index-key
              key={hour}
              numPosts={numPosts}
              onClick={() => onClickHour({ day, hour })}
              selected={hour === selectedHour}
              type="button"
            >
              {numPosts}
            </Hour>
          );
        })
      }
    </Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(arrayOf(propTypes.post)),
  onClickHour: func.isRequired,
  selectedHour: number,
};

HeatmapRow.defaultProps = {
  postsPerHour: {},
  selectedHour: null,
};

export default HeatmapRow;
