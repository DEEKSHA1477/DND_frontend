// src/pages/CreateUserPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from './TopBar';
import './OfficerDashboard.css'; // uses the same global dashboard styles

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

    if (phone.length !== 10 || isNaN(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, phone, userId, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('User created successfully!');
    navigate('/officer/manage-users');
  };

  return (
    <div className="dashboard-container">
      <TopBar />
      <div className="form-wrapper">
        <h2>Create New User</h2>
        <form className="form-box" onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />

          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter 10-digit phone number"
            maxLength="10"
          />

          <label>User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID (e.g., OF123)"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit" onClick={handleCreate}>Create User</button>
        </form>
      </div>
    </div>
  );
}
