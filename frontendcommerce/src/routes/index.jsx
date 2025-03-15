import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../pages/Home';
import Register from '../components/Register';
import ProtectedRoute from '../components/ProtectedRoute'; 
import LandingPage from '../pages/Landing';
import NotFoundPage from '../pages/NotFound';
import { useAxiosInterceptor } from "../utils/axiosInstance.js";
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  useAxiosInterceptor();
  const { authTokens, setTokens } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login setTokens={setTokens} />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute authTokens={authTokens}>
            <Home />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
};

export default memo(AppRoutes);