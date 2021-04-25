import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';
import BackgroundImg from '../assets/images/background.jpg';
import { DownArrow } from '../components/downArrow';
import { Navbar } from '../components/navbar';
import { Marginer } from '../components/marginer';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  color: red;
  background-color: rgb(242, 221, 201);
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo('parentKnowledge', { smooth: true, duration: 1500 });
  };

  return (
    <Element name='topSection'>
      <TopContainer>
        <Navbar />
        <Marginer direction='vertical' margin='8em' />
        <MotivationalText>VÄLKOMMEN till Lillfjärdens BVC</MotivationalText>
        <MotivationalText>- För nya tidens barn och föräldrar</MotivationalText>
        <DownArrowContainer onClick={scrollToNextSection}>
          <DownArrow />
        </DownArrowContainer>
      </TopContainer>
    </Element>
  );
}
