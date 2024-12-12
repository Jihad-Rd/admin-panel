import React, { useEffect, useState } from 'react';
import API from '../api/api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
