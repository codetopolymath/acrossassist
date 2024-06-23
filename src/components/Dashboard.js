import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
import PolicyView from './PolicyView';
import PlanBenifits from './PlanBenefits';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header>
          {/* <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Close' : 'Open'} Sidebar
          </button> */}
          <div className="user-icon">
            <img style={{width: '40px', height: '40px', border: '50%'}} src="https://aacrm.thorintech.com/assets/images/avatars/avatar_default.jpg" alt="User Icon" />
          </div>
        </header>
        <h1>Hi, Welcome back Sameer</h1>
        <div className="insurance-options">
          <div className="insurance-card health">
            <div className="icon">❤️</div>
            <div className="label">Health Insurance</div>
          </div>
          <div className="insurance-card travel">
            <div className="icon">✈️</div>
            <div className="label">Travel Insurance</div>
          </div>
          <div className="insurance-card life">
            <div className="icon">☂️</div>
            <div className="label">Life Insurance</div>
          </div>
          <div className="insurance-card auto">
            <div className="icon">🚗</div>
            <div className="label">Auto Insurance</div>
          </div>
        </div>
        <PolicyView />
        <PlanBenifits />
      </div>
    </div>
  );
};

export default Dashboard;