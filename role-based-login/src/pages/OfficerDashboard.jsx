// OfficerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OfficerDashboard.css';

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="top-bar">
      <div className="notification-icon" onClick={() => navigate('/officer/notifications')}>
        🔔
      </div>
      <button className="logout-button" onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}

export default function OfficerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <TopBar />
      <h1>Welcome, Officer!</h1>
      <div className="dashboard-blocks horizontal">
        <div className="dashboard-block" onClick={() => navigate('/officer/view-tool-requests')}>
          View Tool Requests
        </div>
        <div className="dashboard-block" onClick={() => navigate('/officer/manage-users')}>
          Manage Users
        </div>
        <div className="dashboard-block" onClick={() => navigate('/officer/tool-addition-requests')}>
          Tool Addition Requests
        </div>
        <div className="dashboard-block" onClick={() => navigate('/officer/issue-reports')}>
          Tool Issue Reports
        </div>
      </div>
    </div>
  );
}