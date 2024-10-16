import React from 'react';
import { Tabs, Button } from 'antd';
import './AdminDashboard.css';
import ContactSubmissions from '../admin/Contactsubmission';
import RoomManagement from './RoomManagement.js';
import AddRoom from '../admin/AddRoom.js';
// import Settings from '../admin/Settings';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Perform logout logic, like clearing tokens
    // Redirect to login page after logout
    navigate('/adminlogin');
  };

  return (
    <div className="admin-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        {/* Left side - Natto text */}
        <div className="header-left">
          <h2 className="nav-logo">UNWIND</h2>
        </div>
        
        {/* Right side - Hello, Admin and Logout button */}
        <div className="header-right">
          <span className="greeting">Hello, Admin</span>
          <Button type="primary" onClick={handleLogout} style={{color: 'black', border:'black'}} className="logout-btn">
            Logout
          </Button>
        </div>
      </div>

      {/* Main content - Tabs */}
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Contact Submissions" key="1">
            <ContactSubmissions />
          </TabPane>
          <TabPane tab="Room Management" key="2">
            <RoomManagement />
          </TabPane>
          <TabPane tab="AddRoom" key="3">
            <AddRoom />
          </TabPane>{/* 
          <TabPane tab="Settings" key="4">
            <Settings />
          </TabPane> */}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
