import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/images/background.jpg';
import { DownArrow } from '../components/downArrow';
import { Navbar } from '../components/navbar';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  color: red;
  background-color: rgb(242, 221, 201);
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <Navbar />
      <DownArrowContainer>
        <DownArrow />
      </DownArrowContainer>
    </TopContainer>
  );
}
