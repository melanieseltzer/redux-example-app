import { connect } from 'react-redux';
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

const Header = ({totalUsers}) => (
  <StyledHeader>
    <h1>Sick App!</h1>

    <div>Total Users: {totalUsers}</div>
  </StyledHeader>
);

const mapStateToProps = state => ({
  totalUsers: state.users.names.length
});
export default connect(mapStateToProps)(Header);
