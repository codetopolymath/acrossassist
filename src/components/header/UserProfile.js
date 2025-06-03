import React, { useEffect, useState, useCallback } from 'react';
import { User, X, Edit, Save, AlertTriangle } from 'lucide-react';

const GetUserProfile = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    name: 'John Doe',
    address: '123 Main St, Anytown, USA',
    date_of_birth: '1990-01-01',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
  };
};

const UserProfile = ({ onClose }) => {
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

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  }, []);

  const handleEdit = useCallback(() => {
    setEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditing(false);
      setSnackbar({ open: true, message: 'Profile updated successfully!' });
      setOriginalProfile(profile);
    }, 1000);
  }, [profile]);

  const handleCancel = useCallback(() => {
    if (JSON.stringify(profile) !== JSON.stringify(originalProfile)) {
      setConfirmDialog(true);
    } else {
      setEditing(false);
    }
  }, [profile, originalProfile]);

  const confirmCancel = useCallback(() => {
    setProfile(originalProfile);
    setEditing(false);
    setConfirmDialog(false);
  }, [originalProfile]);

  const closeSnackbar = useCallback(() => {
    setSnackbar({ ...snackbar, open: false });
  }, [snackbar]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '40px', height: '40px', border: '4px solid #f0f2f5', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '32px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '80vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#666666'
          }}
        >
          <X size={24} />
        </button>
        
        <h1 style={{ fontSize: '28px', color: '#2c3e50', fontWeight: 'bold', marginBottom: '24px' }}>User Profile</h1>
        
        {!editing && (
          <button
            onClick={handleEdit}
            style={{
              position: 'absolute',
              top: '20px',
              right: '60px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#2980b9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#3498db';
            }}
          >
            <Edit size={20} />
          </button>
        )}
        
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#e6f7ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 16px'
          }}>
            <User size={60} color="#3498db" />
          </div>
        </div>
        
        <form style={{ width: '100%' }}>
          {Object.entries(profile).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '16px', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
              </label>
              <input
                type={key === 'date_of_birth' ? 'date' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #e6f7ff',
                  borderRadius: '5px',
                  backgroundColor: editing ? 'white' : '#f0f2f5',
                  color: '#2c3e50'
                }}
              />
            </div>
          ))}
          
          {editing && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '24px' }}>
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}
              >
                <Save size={20} />
                Save
              </button>
              <button
                onClick={handleCancel}
                style={{
                  backgroundColor: 'white',
                  color: '#3498db',
                  border: '2px solid #3498db',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f2f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <X size={20} />
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
      
      {snackbar.open && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#2ecc71',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          {snackbar.message}
        </div>
      )}
      
      {confirmDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1002
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '24px',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={24} color="#e74c3c" />
              Discard Changes?
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', marginBottom: '24px' }}>
              You have unsaved changes. Are you sure you want to discard them?
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
              <button
                onClick={() => setConfirmDialog(false)}
                style={{
                  backgroundColor: 'white',
                  color: '#3498db',
                  border: '2px solid #3498db',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f2f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                Keep Editing
              </button>
              <button
                onClick={confirmCancel}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'}
              >
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;