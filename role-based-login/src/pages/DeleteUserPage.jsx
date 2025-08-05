// src/pages/DeleteUserPage.jsx
import React, { useEffect, useState } from 'react';

export default function DeleteUserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h2>Delete Users</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.userId} - {user.phone}
              <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
