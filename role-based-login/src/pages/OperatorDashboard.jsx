// OperatorDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OperatorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/');

  return (
    <div className="page">
      <div className="top-bar">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="container">
        <h2>Welcome, Operator!</h2>
      </div>
    </div>
  );
}
