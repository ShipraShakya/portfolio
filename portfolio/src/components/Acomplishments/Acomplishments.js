import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText,BoxSmallText, Timeline } from './AcomplishmentsStyles';

const data = [
  { head: 'DRDO', text: 'Internship', small:'Software Developer', time:'dec-2021 -- mar-2022'},
  { head: 'Coding Ninjas', text: 'Course', small:'DSA using Java', time:'mar-2021 -- sep-2021' },
  { head: 'Pepcoding', text: 'Training', small:'Industry Ready Program', time:'Aug-2021 -- Aug-2022'},
  { head: 'Internshala', text: 'Course', small:'Full Stack(PERN)', time:'july-2021 -- sep-2022'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments or Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.head} </BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxSmallText>{card.small}</BoxSmallText>
          <Timeline>{card.time}</Timeline>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
