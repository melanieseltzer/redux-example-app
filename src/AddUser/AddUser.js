import { connect } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addUser } from '../actions';

const AddUser = ({ addTheUser }) => {
  const [user, setUser] = useState('');

  const handleAddUser = () => {
    addTheUser(user);
  };

  return (
    <section>
      <label htmlFor="add-user">
        Add User
        <input
          id="add-user"
          placeholder="Bob Smith"
          onChange={e => setUser(e.target.value)}
        />
      </label>

      <button type="button" onClick={handleAddUser}>
        Add
      </button>
    </section>
  );
};

AddUser.propTypes = {
  addTheUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addTheUser: addUser
};
export default connect(null, mapDispatchToProps)(AddUser);
