import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Box textAlign="center" my={5}>
        <Typography variant="h3" gutterBottom>
          Welcome to Landing page
        </Typography>
        <Typography variant="h6" paragraph>
          Browse and shop the best products available. Start shopping now!
        </Typography>
        
        <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
          <img src="/images/test_image.png" alt="Image 1" style={{ width: '200px', height: 'auto', borderRadius: '8px' }} />
        </Box>

        <Box sx={{ marginTop: 4 }} display="flex" justifyContent="center" gap={2}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/login"
            size="large"
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            component={Link} 
            to="/register"
            size="large"
          >
            Register
          </Button>
        </Box>

      </Box>
    </Container>
  );
};

export default LandingPage;
