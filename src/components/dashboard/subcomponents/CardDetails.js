import React from 'react';

const CardDetails = ({ card, details }) => {
  return (
    <div style={{ 
      margin: '0 20px 20px', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>{details.title}</h2>
      </div>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '15px' }}>{details.description}</p>
      <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Key Features:</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
        {details.keyFeatures.map((feature, index) => (
          <li key={index} style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>{feature}</li>
        ))}
      </ul>
      <p style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>
        <strong>Coverage Amount:</strong> {details.coverageAmount}
      </p>
      <p style={{ fontSize: '16px', color: '#333' }}>
        <strong>Monthly Premium:</strong> {details.monthlyPremium}
      </p>
    </div>
  );
};

export default CardDetails;