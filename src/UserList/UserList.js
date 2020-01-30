import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSidebar = styled.aside`
  border: 1px solid lightsalmon;
  width: 300px;
`;

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No users :(</p>
  }
  return (
    <StyledSidebar>
      <ul>
        {users.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </StyledSidebar>
)};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.names
});
export default connect(mapStateToProps)(UserList);
