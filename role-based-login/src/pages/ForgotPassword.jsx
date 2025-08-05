
// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    alert('Password changed successfully');
    navigate('/');
  };

  return (
    <div className="page">
      <div className="top-bar"></div>
      <div className="container">
        <h2>Reset Password</h2>
        <input
          type="text"
          placeholder="Enter ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleReset}>Change Password</button>
      </div>
    </div>
  );
}
