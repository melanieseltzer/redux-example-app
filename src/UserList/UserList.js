import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  border: 1px solid lightsalmon;
  width: 300px;
`;

const UserList = () => (
  <StyledSidebar>
    <ul>
      <li>List</li>
      <li>Of</li>
      <li>Users...</li>
    </ul>
  </StyledSidebar>
);

export default UserList;
