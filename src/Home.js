import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Define styles
  const styles = {
    container: {
      backgroundColor: '#e6f7ff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '20px auto',
      fontFamily: 'Sans-serif',
    },
    heading: {
      color: '#2c3e50',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    link: {
      textDecoration: 'none',
      color: '#3498db',
      gap: '5px',
      bottom: '5px',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    linkHover: { // Note: Inline styles don't support pseudo-classes like :hover. This object is for reference.
      transform: 'scale(1.05)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      margin: '10px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the App</h1>
      <nav>
        <ul style={styles.list}>
          <li style={styles.listItem}><Link to="/login" style={styles.link}>Login</Link></li>
          <li style={styles.listItem}><Link to="/submitOTP" style={styles.link}>Submit OTP</Link></li>
          <li style={styles.listItem}><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
          <li style={styles.listItem}><Link to="/profile" style={styles.link}>Profile</Link></li>
          <li style={styles.listItem}><Link to="/policy-view" style={styles.link}>Policy View</Link></li>
          <li style={styles.listItem}><Link to="/plan-benefits" style={styles.link}>Plan Benefits</Link></li>
          <li style={styles.listItem}><Link to="/policy-history" style={styles.link}>Policy History</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;