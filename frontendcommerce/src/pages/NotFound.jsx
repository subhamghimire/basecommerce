import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h3" gutterBottom align="center">
          404 - Page Not Found
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
