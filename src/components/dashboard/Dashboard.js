import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import PolicyView from '../policy/PolicyView';
import PlanBenifits from '../policy/PlanBenefits';

const Dashboard = ({ isSidebarOpen }) => {

  console.log('isSidebarOpen', isSidebarOpen)

  const cards = [
    { id: 1, icon: '❤️', label: 'Health Insurance', className: 'health', backgroundColor: '#e6f7ff' },
    { id: 2, icon: '✈️', label: 'Travel Insurance', className: 'travel', backgroundColor: '#f0f5ff' },
    { id: 3, icon: '☂️', label: 'Life Insurance', className: 'life', backgroundColor: '#fffbe6' },
    { id: 4, icon: '🚗', label: 'Auto Insurance', className: 'auto', backgroundColor: '#fff1f0' },
    { id: 5, icon: '🏠', label: 'Home Insurance', className: 'home', backgroundColor: '#e6f7ff' },
    { id: 6, icon: '🚑', label: 'Medical Insurance', className: 'medical', backgroundColor: '#f0f5ff' },
    { id: 7, icon: '📱', label: 'Mobile Insurance', className: 'mobile', backgroundColor: '#fffbe6' },
    { id: 8, icon: '📺', label: 'Home Appliance Insurance', className: 'appliance', backgroundColor: '#e6f7ff' },
    { id: 9, icon: '💻', label: 'Computer Insurance', className: 'computer', backgroundColor: '#e6f7ff' },
    { id: 10, icon: '📷', label: 'Camera Insurance', className: 'camera', backgroundColor: '#fff1f0' },
    { id: 11, icon: '🎮', label: 'Gaming Console Insurance', className: 'console', backgroundColor: '#e6f7ff' },
    { id: 12, icon: '🎧', label: 'Headphone Insurance', className: 'headphone', backgroundColor: '#f0f5ff' }
  ];

    // Adjust the dashboard content style based on the sidebar state
    const dashboardContentStyle = {
      flexGrow: 1,
      padding: '20px',
      marginBottom: '40px',
    };

    return (
      <div className="dashboard-container" style={{ display: 'flex', height: '100vh', marginBottom: '40px' }}>
        <div className="dashboard-content" style={dashboardContentStyle}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Hi, Welcome back User</h1>
          </header>
          <div className="insurance-options" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '40px', justifyContent: 'center' }}>
            {cards.map((card) => (
              <div key={card.id} className={`insurance-card ${card.className}`} style={{ flex: '1 1 calc(25% - 20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.3s', backgroundColor: card.backgroundColor }}>
                <div className="icon" style={{ fontSize: '40px', marginBottom: '10px' }}>{card.icon}</div>
                <div className="label" style={{ fontSize: '18px', color: '#333' }}>{card.label}</div>
              </div>
            ))}
          </div>
          <div style={{ margin: '20px', padding: '20px' }}>
            <PlanBenifits />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;