import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import propTypes from './propTypes';
import { Container, Weekday, Hour } from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

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
        postsPerHour.map((posts, hour) => (
          <Hour
            // eslint-disable-next-line react/no-array-index-key
            key={hour}
            numPosts={posts.length}
            onClick={() => onClickHour({ day, hour })}
            selected={hour === selectedHour}
            type="button"
          >
            {posts.length}
          </Hour>
        ))
      }
    </Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(arrayOf(propTypes.post)).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
};

export default HeatmapRow;
