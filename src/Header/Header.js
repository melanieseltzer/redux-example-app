import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cdcdcd;
  height: 70px;
  padding: 40px;
`;

const Header = () => (
  <StyledHeader>
    <h1>Sick App!</h1>

    <div>Total Users:</div>
    {/* Display how many users have been added */}
  </StyledHeader>
);

export default Header;
