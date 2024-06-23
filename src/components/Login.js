import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [policyNo, setPolicyNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [mobile, setMobile] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    console.log('Logging in with:', { policyNo, passportNo, mobile });
  };

  return (
    <div className="login-container">
      <div className="login-left">
        {/* <img src="logo.png" alt="Across Assist Logo" className="logo" /> */}
        <h1>Hi, Welcome Back, <strong>Customer</strong></h1>
        <img src="https://www.acrossassist.com/images/acrossassist/aa_logo_horizontal_small.png" alt="Across Assist Text" className="logo-text" />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Sign in to InsuranceCRM</h2>
          <input 
            type="text" 
            placeholder="Policy No" 
            value={policyNo} 
            onChange={(e) => setPolicyNo(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Passport No" 
            value={passportNo} 
            onChange={(e) => setPassportNo(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Mobile" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
          />
          <button onClick={handleSubmit} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
