// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import OfficerDashboard from './pages/OfficerDashboard';
import OperatorDashboard from './pages/OperatorDashboard';
import SupervisorDashboard from './pages/SupervisorDashboard';
import ViewToolRequestsPage from './pages/ViewToolRequestsPage';
import ManageUsersPage from './pages/ManageUsersPage';
import ToolAdditionRequestsPage from './pages/ToolAdditionRequestsPage';
import IssueReportsPage from './pages/IssueReportsPage';
import CreateUserPage from './pages/CreateUserPage';
import DeleteUserPage from './pages/DeleteUserPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Officer Dashboard and subpages */}
        <Route path="/officer-dashboard" element={<OfficerDashboard />} />
        <Route path="/officer/view-tool-requests" element={<ViewToolRequestsPage />} />
        <Route path="/officer/manage-users" element={<ManageUsersPage />} />
        <Route path="/officer/create-user" element={<CreateUserPage />} />
        <Route path="/officer/delete-user" element={<DeleteUserPage />} />
        <Route path="/officer/tool-addition-requests" element={<ToolAdditionRequestsPage />} />
        <Route path="/officer/issue-reports" element={<IssueReportsPage />} />

        {/* Operator and Supervisor Dashboards */}
        <Route path="/operator-dashboard" element={<OperatorDashboard />} />
        <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
      </Routes>
    </Router>
  );
}
