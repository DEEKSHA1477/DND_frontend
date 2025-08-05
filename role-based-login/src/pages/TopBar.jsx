// src/components/TopBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <button className="logout-button" onClick={() => navigate('/')}>
        Logout
      </button>
    </div>
  );
}
