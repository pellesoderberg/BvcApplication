import React from 'react';
import styled from 'styled-components';
import { TopSection } from './topSection';

const pageContainer = styled.div`
width: 100%;
height: 100% 
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return (
    <pageContainer>
      <TopSection />
    </pageContainer>
  );
}
