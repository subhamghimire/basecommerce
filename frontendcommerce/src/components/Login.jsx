import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../utils/axiosInstance";

const Login = ({ setTokens }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const response = await axiosInstance.post('/login/', data);
      setTokens(response.data); 
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  const redirectToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
        {message && <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>{message}</Typography>}

        <Button
          variant="text"
          color="primary"
          onClick={redirectToRegisterPage}
          sx={{ marginTop: 2, textTransform: 'none' }}
        >
          Don't have an account? Register
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
