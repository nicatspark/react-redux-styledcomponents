import React from 'react';
import styled from 'styled-components';
import logo from '../assets/scania-wordmark.svg';
import symbol from '../assets/scania-symbol.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #333;
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt='logo' height='30' />
      <img src={symbol} alt='symbol' height='40' />
    </StyledHeader>
  );
}

export default Header;
