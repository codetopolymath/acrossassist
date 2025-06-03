import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitOTP() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp); // Keep otp as an array of strings

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming 'phone_email' is stored in localStorage for demo purposes
    const phone_email = localStorage.getItem('phone_email');
    const payload = { phone_email, otp: otp.join('') };

    // Add your API call logic here
    console.log('Submitting OTP:', payload);
    // Navigate to dashboard upon successful OTP submission
    navigate('/dashboard'); 
  };

  const handleResendOTP = () => {
    // Add your resend OTP logic here
    console.log('Resending OTP');
  };

  // Styles aligned with UI principles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#e6f7ff', // Primary background
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f0f2f5', // Secondary background
    },
    inputGroup: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
    },
    input: {
      width: '40px',
      height: '40px',
      margin: '0 5px',
      textAlign: 'center',
      fontSize: '20px',
      borderRadius: '10px',
      border: `1px solid #3498db`, // Blue border for interactive elements
    },
    button: {
      backgroundColor: '#2ecc71', // Green button
      color: 'white',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    },
    text: {
      color: '#2c3e50', // Primary text color
      margin: '10px 0',
    },
    link: {
      color: '#3498db', // Blue for interactive elements
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>Enter the OTP sent to your email/phone</div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              style={styles.input}
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
            />
          ))}
        </div>
        <button type="submit" style={styles.button} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'none'}>Verify OTP</button>
      </form>
      <div style={styles.text}>
        Didn't receive the code? <span style={styles.link} onClick={handleResendOTP}>Resend OTP</span>
      </div>
    </div>
  );
}

export default SubmitOTP;