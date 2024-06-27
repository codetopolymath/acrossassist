import React, { useEffect, useState } from 'react';
import { 
  Avatar, TextField, Grid, Typography, Paper, Box, 
  Snackbar, CircularProgress, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

const GetUserProfile = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    name: 'John Doe',
    address: '123 Main St, Anytown, USA',
    date_of_birth: '1990-01-01',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px',
    margin: '32px auto',
    maxWidth: 600,
    width: '100%',
    gap: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: '24px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: '24px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
    marginTop: '24px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 20px',
  transition: 'all 0.3s ease-in-out',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
  },
  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}));

const PrimaryButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: '#4a90e2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#357abd',
  },
}));

const SecondaryButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#4a90e2',
  border: '2px solid #4a90e2',
  '&:hover': {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
  },
}));

const FloatingEditButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '16px',
  right: '16px',
  borderRadius: '50%',
  minWidth: '56px',
  width: '56px',
  height: '56px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(45deg)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
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
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [originalProfile, setOriginalProfile] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await GetUserProfile();
        setProfile(data);
        setOriginalProfile(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setSnackbar({ open: true, message: 'Error fetching profile. Please try again.' });
        setLoading(false);
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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Simulating API call to save profile
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditing(false);
      setSnackbar({ open: true, message: 'Profile updated successfully!' });
      setOriginalProfile(profile);
    }, 1000);
  };

  const handleCancel = () => {
    if (JSON.stringify(profile) !== JSON.stringify(originalProfile)) {
      setConfirmDialog(true);
    } else {
      setEditing(false);
    }
  };

  const confirmCancel = () => {
    setProfile(originalProfile);
    setEditing(false);
    setConfirmDialog(false);
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      {!editing && (
        <FloatingEditButton
          color="primary"
          onClick={handleEdit}
          aria-label="edit"
        >
          <EditIcon />
        </FloatingEditButton>
      )}
      <Avatar
        src={'https://cipherwingsolution.com/assets/img/logo.svg'}
        className={classes.avatar}
      />
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={classes.input}
          disabled={!editing}
          style={{ marginBottom: '20px' }} 
        />
        <TextField
          label="Address"
          name="address"
          value={profile.address}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={classes.input}
          disabled={!editing}
          multiline
          rows={2}
          style={{ marginBottom: '20px' }} 
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
          disabled={!editing}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginBottom: '20px' }} 
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
          disabled={!editing}
          style={{ marginBottom: '20px' }} 
        />
        <TextField
          label="Phone"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={classes.input}
          disabled={!editing}
          style={{ marginBottom: '20px' }} 
        />
        {editing && (
          <div className={classes.buttonGroup}>
            <PrimaryButton
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </PrimaryButton>
            <SecondaryButton
              startIcon={<CancelIcon />}
              onClick={handleCancel}
            >
              Cancel
            </SecondaryButton>
          </div>
        )}
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={snackbar.message}
      />
      <Dialog
        open={confirmDialog}
        onClose={() => setConfirmDialog(false)}
      >
        <DialogTitle>Discard Changes?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Are you sure you want to discard them?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={() => setConfirmDialog(false)}>
            Keep Editing
          </SecondaryButton>
          <PrimaryButton onClick={confirmCancel} color="error">
            Discard Changes
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UserProfile;