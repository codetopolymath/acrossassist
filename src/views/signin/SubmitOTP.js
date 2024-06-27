import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitOTP() {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const navigate = useNavigate();

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp.join(''));

    // Auto-focus to next input on entry
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const phone_email = localStorage.getItem('phone_email');
    const payload = { phone_email, otp };

    try {
      const response = await fetch('http://127.0.0.1:8000/user/otp/verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('access_token', data.access);
        
        console.log('OTP verification successful:', data);
        navigate('/dashboard');
      } else {
        console.error('Failed to verify OTP:', await response.text());
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            style={{
              width: '40px',
              height: '40px',
              margin: '0 5px',
              textAlign: 'center',
              fontSize: '20px',
            }}
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
          />
        ))}
        <button type="submit" style={{ marginLeft: '10px' }}>Verify OTP</button>
      </form>
    </div>
  );
}

export default SubmitOTP;