import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';

const foo: string = 'abc';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  return (
    <div>
      <h1>Users3</h1>
      {users.map((user: { name: string }) => (
        <span key={user.name}>{user.name}</span>
      ))}
    </div>
  );
}

export default App;
