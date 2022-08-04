import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='technologies'>
    <SectionDivider/>
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionText>
        In languages I have used Java, C++ & C.
        <hr />
        In the Software Developement I have experience of HTML, CSS, Javascript, ReactJs, NodeJs, Figma, PHP, MySQL,PotgreSQL, Tomcat, Apache.
      </SectionText>

      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer></ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with<br/>React.js</ListParagraph>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer></ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with<br/>Node and SQL</ListParagraph>
        </ListItem>
        <ListItem>
          <FiFigma size="2rem"/>
          <ListContainer></ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>Experience with <br/>Tools like Figma</ListParagraph>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
