import React from 'react';
import { Container, Hour } from './HeatmapHeaderRow.style';

const hours = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

function HeatmapHeaderRow() {
  return (
    <Container>
      {
        hours.map((hour) => (
          <Hour key={hour}>
            {hour}
          </Hour>
        ))
      }
    </Container>
  );
}

export default HeatmapHeaderRow;
