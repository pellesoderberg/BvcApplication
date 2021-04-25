import React from 'react';
import styled from 'styled-components';
import { TopSection } from './topSection';
import { DownArrow } from '../components/downArrow';

const pageContainer = styled.div`
width: 100%;
height: 100% 
display: flex;
flex-direction: column;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function Homepage(props) {
  return (
    <pageContainer>
      <TopSection />
      <DownArrowContainer>
        <DownArrow />
      </DownArrowContainer>
    </pageContainer>
  );
}
