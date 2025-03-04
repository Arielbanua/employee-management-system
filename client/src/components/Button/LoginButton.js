import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Button 
      variant="contained" 
      color="warning" 
      onClick={handleLogin}
    >
      Login
    </Button>
  );
};

export default LoginButton;