import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../Header';
import AddUser from '../AddUser';
import UserList from '../UserList';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

const StyledMain = styled.main`
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <StyledMain>
        <AddUser />

        <UserList />
      </StyledMain>
    </>
  );
}

export default App;
