import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState(''); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone_email = mobile || email; 
    const payload = { phone_email };
    localStorage.setItem('phone_email', phone_email);

    try {
      const response = await fetch('http://127.0.0.1:8000/user/otp/generate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('OTP sent successfully:', data);
      } else {
        console.error('Failed to send OTP:', await response.text());
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    };


    navigate('/submitOTP');
    console.log('Logging in with:', { mobile });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }} className="login-container">
      <div style={{
        order: 2,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f5f7',
        padding: '20px',
      }} className="login-left">
        <img src="https://cipherwingsolution.com/assets/img/logo.svg" alt="Across Assist Logo" style={{ width: '200px', marginBottom: '20px' }} className="logo" />
        <h1 style={{ margin: '20px 0', fontSize: '30px', color: '#333' }}>Hi Customer, Welcome Back</h1>
        <img src="https://www.acrossassist.com/images/acrossassist/aa_logo_horizontal_small.png" alt="Across Assist Text" style={{ width: '300px' }} className="logo-text" />
      </div>
      <div style={{
        order: 1,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }} className="login-right">
        <form onSubmit={handleSubmit} style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
        }} className="login-form">
          <h2 style={{ marginBottom: '20px', fontSize: '30px', color: '#333' }}>Sign in to InsuranceCRM</h2>
          <input 
            type="text" 
            placeholder="Mobile" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            style={{
              marginBottom: '15px',
              padding: '14px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
          }}>
            <hr style={{ flex: 1, borderTop: '1px solid #ccc' }} />
            <span style={{ padding: '0 10px' }}>OR</span>
            <hr style={{ flex: 1, borderTop: '1px solid #ccc' }} />
          </div>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}  
            onChange={(e) => setEmail(e.target.value)} 
            style={{
              marginBottom: '15px',
              padding: '14px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          />
          <button type="submit" style={{
            padding: '14px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
          }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;