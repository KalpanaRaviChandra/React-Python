import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const UserProfile = () => {
  const location = useLocation();
  const username = location.state?.username; 
  return (
    <Box
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: 'purple', marginBottom: 2 }}
      >
        User Profile
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: 'green', textAlign: 'center' }}
      >
        Welcome, {username || 'User'}!
      </Typography>
    </Box>
  );
};

export default UserProfile;
