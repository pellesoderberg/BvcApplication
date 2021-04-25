import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';
import { Button } from '../button';

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(242, 221, 201);
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <LoginButton small>Lillfjärdens BVC</LoginButton>
      </BrandContainer>
      <Marginer direction='horizontal' margin='8px' />
      <LoginButton small>Lista dig här</LoginButton>
      <LoginButton small>Föräldrakunskap</LoginButton>
      <LoginButton small>Om oss</LoginButton>
      <LoginButton small>Hitta hit</LoginButton>
    </NavbarContainer>
  );
}
