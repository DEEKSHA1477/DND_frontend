// src/pages/CreateUserPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateUserPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!name || !phone || !userId || !password) {
      alert('All fields are required.');
      return;
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    const newUser = { name, phone, userId, password };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    alert('User created successfully');
    navigate('/officer/manage-users');
  };

  return (
    <div className="container">
      <h2>Create New User</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="text" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
