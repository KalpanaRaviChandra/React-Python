import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    if (username && password && confirmPassword) {
      if (!/^[A-Z]/.test(username)) {
        setErrorMessage('Username must start with a capital letter.');
        return;
      }
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }
      if (password === confirmPassword) {
        try {
          const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          if (response.ok) {
            setLoginStatus('success');
            setErrorMessage('');
            setTimeout(() => {
              navigate('/UserProfile', { state: { username }, replace: true });
            }, 2000);
          } else {
            setLoginStatus('');
            setErrorMessage(data.status || 'Registration failed.');
          }
        } catch (error) {
          setLoginStatus('');
          setErrorMessage('Web services unavailable');
          console.error('Error:', error);
        }
      } else {
        setLoginStatus('');
        setErrorMessage('Passwords do not match.');
      }
    } else {
      setLoginStatus('');
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" align="center" gutterBottom sx={{ color: 'purple' }}>
            Credentials
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleLogin}
              size="small"
            >
              Login
            </Button>
          </Box>

          {loginStatus === 'success' && (
            <Typography
              variant="body1"
              style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}
            >
              User logged in successful! You will be redirected to your profile shortly.
            </Typography>
          )}
          {errorMessage && (
            <Typography
              variant="body1"
              style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
