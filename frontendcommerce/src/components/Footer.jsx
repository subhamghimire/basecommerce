import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Footer = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <Box
      component="footer"
      sx={{
        padding: "20px",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1" color="textSecondary">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Footer;
