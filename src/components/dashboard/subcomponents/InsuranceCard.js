import React from 'react';

const InsuranceCard = ({ card, isSelected, onClick, monthlyPremium }) => {
  return (
    <div 
      className={`insurance-card ${card.className}`} 
      style={{ 
        flex: '1 1 calc(25% - 20px)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '20px', 
        borderRadius: '10px', 
        cursor: 'pointer', 
        transition: 'transform 0.3s, box-shadow 0.3s', 
        backgroundColor: card.backgroundColor,
        boxShadow: isSelected ? '0 0 10px rgba(0,0,0,0.2)' : 'none',
        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
      }}
      onClick={onClick}
    >
      <div className="icon" style={{ fontSize: '40px', marginBottom: '10px' }}>{card.icon}</div>
      <div className="label" style={{ fontSize: '18px', color: '#333' }}>{card.label}</div>
      <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>{monthlyPremium}/month</div>
    </div>
  );
};

export default InsuranceCard;