import React, { useState } from 'react';
import './Login.css'; // Assuming you will add your styles in Login.css

const Login = () => {
  const [policyNo, setPolicyNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Logging in with:', { policyNo, passportNo, mobile });
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="https://cipherwingsolution.com/assets/img/logo.svg" alt="Across Assist Logo" className="logo" />
        <h1>Hi Customer, Welcome Back</h1>
        <img src="https://www.acrossassist.com/images/acrossassist/aa_logo_horizontal_small.png" alt="Across Assist Text" className="logo" />
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;