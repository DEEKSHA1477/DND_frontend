// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId.startsWith('OF')) {
      navigate('/officer-dashboard');
    } else if (userId.startsWith('OP')) {
      navigate('/operator-dashboard');
    } else if (userId.startsWith('SU')) {
      navigate('/supervisor-dashboard');
    } else {
      alert('Invalid ID prefix');
    }
  };

  return (
    <div className="page">
      <div className="top-bar">
        {/* No logout or theme toggle on login */}
      </div>

      <div className="container">
        <h1 className="title">Tool Management</h1>
        <input
          type="text"
          placeholder="Enter ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p className="link" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
      </div>
    </div>
  );
}
