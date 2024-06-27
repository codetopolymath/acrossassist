import React, { useEffect, useState } from 'react';
import { Avatar, Button, TextField, Grid, Typography, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const GetUserProfile = async () => {
  return fetch('https://api.example.com/user-profile')
    .then(response => response.json())
    .catch(error => console.error('Error fetching profile:', error));
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'relative',
    left: '23%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px', 
    margin: '32px', 
    maxWidth: 500,
    width: '100%',
    gap: '16px',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: '16px', 
  },
  input: {
    marginBottom: '16px', 
  },
  button: {
    marginTop: '16px',
  },
}));

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    address: '',
    date_of_birth: '',
    email: '',
    phone: '',
  });

  const classes = useStyles();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await GetUserProfile();
        setProfile({
          name: data.name,
          address: data.address,
          date_of_birth: data.date_of_birth,
          email: data.email,
          phone: data.phone,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Profile saved:', profile);
  };

  const handleCancel = () => {
    console.log('Profile changes canceled');
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>User Information</Typography>
      <Avatar
        src={'https://cipherwingsolution.com/assets/img/logo.svg'}
        className={classes.avatar}
      />
      <TextField
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className={classes.input}
      />
      <TextField
        label="Address"
        name="address"
        value={profile.address}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className={classes.input}
      />
      <TextField
        label="Date of Birth"
        name="date_of_birth"
        type="date"
        value={profile.date_of_birth}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className={classes.input}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={profile.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className={classes.input}
      />
      <TextField
        label="Phone"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className={classes.input}
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSave}>
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.button} onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfile;