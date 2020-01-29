import React, { useState } from 'react';

const AddUser = () => {
  const [user, setUser] = useState('');

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

      <button type="button" onClick={() => alert(`added: ${user}`)}>
        Add
      </button>
    </section>
  );
};

export default AddUser;
