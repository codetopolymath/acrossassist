import React, { useState } from 'react';
import { User, Bell, Shield, Briefcase } from 'lucide-react';
import UserProfile from '../../header/UserProfile';

const WelcomeSection = ({ username, notifications, activePolicies, totalCoverage }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div style={{
        backgroundColor: '#e6f7ff',
        borderRadius: '15px',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '28px', color: '#2c3e50', fontWeight: 'bold' }}>
            Welcome back, {username}!
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={24} color="#2c3e50" />
              {notifications > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px'
                }}>
                  {notifications}
                </span>
              )}
            </div>
            <User 
              size={24} 
              color="#2c3e50" 
              style={{ cursor: 'pointer' }} 
              onClick={() => setIsProfileOpen(true)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
          <InfoCard icon={<Shield size={30} color="#27ae60" />} title="Active Policies" value={activePolicies} color="#27ae60" />
          <InfoCard icon={<Briefcase size={30} color="#3498db" />} title="Total Coverage" value={`$${totalCoverage.toLocaleString()}`} color="#3498db" />
        </div>
        <button style={{
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          alignSelf: 'flex-start'
        }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}>
          Explore New Policies
        </button>
      </div>
      {isProfileOpen && (
        <UserProfile onClose={() => setIsProfileOpen(false)} />
      )}
    </>
  );
};

const InfoCard = ({ icon, title, value, color }) => (
  <div style={{
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
    {icon}
    <div>
      <h3 style={{ margin: 0, color: '#2c3e50' }}>{title}</h3>
      <p style={{ margin: 0, color: color, fontWeight: 'bold' }}>{value}</p>
    </div>
  </div>
);

export default WelcomeSection;