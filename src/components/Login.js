import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';

const Login = () => {
  const [policyNo, setPolicyNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [mobile, setMobile] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Logging in with:', { policyNo, passportNo, mobile });
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h1" gutterBottom>
            Hi, Welcome Back, <strong>Customer</strong>
            </Typography>
            <Box
              component="img"
              sx={{
                height: 'auto',
                width: '100%',
                maxWidth: '250px',
              }}
              alt="Across Assist Text"
              src="https://www.acrossassist.com/images/acrossassist/aa_logo_horizontal_small.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Sign in to InsuranceCRM
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="policyNo"
                label="Policy No"
                name="policyNo"
                autoComplete="policyNo"
                autoFocus
                value={policyNo}
                onChange={(e) => setPolicyNo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="passportNo"
                label="Passport No"
                name="passportNo"
                autoComplete="passportNo"
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                autoComplete="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;