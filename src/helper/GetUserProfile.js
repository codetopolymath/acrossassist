async function getUserProfile() {
  const accessToken = process.env.ACCESS_TOKEN || `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUwODUyMTY0LCJpYXQiOjE3MTkzMTYxNjQsImp0aSI6IjBhMzRmNGZiNWViOTQ1MzZhZGNhYjFiNjcxMDUzZDExIiwidXNlcl9pZCI6IjY3MzgzM2U4LTk1ODMtNGFkMS1hYjA0LTk0ZGViYjFlYTk2NCJ9.5BHu6WEuFKUzgceOj0_lRwWYnCeruRSAnVPVtojhDfE`; 
  const apiUrl = process.env.API_URL || 'http://127.0.0.1:8000/user/profile/';

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  };
  
  try {
    const response = await fetch(apiUrl, requestOptions);
    
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Rethrow to allow caller to handle it
  }
}

export default getUserProfile;