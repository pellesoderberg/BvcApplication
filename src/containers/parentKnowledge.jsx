import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../components/sectionTitle';
import { Element } from 'react-scroll';

const ParentKnowledgeContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ParentKnowledge(props) {
  return (
    <ParentKnowledgeContainer name='parentKnowledge'>
      <SectionTitle>Best Quality Software</SectionTitle>
    </ParentKnowledgeContainer>
  );
}
