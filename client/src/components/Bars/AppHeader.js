import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import LoginButton from '../Button/LoginButton';
import LogoutButton from '../Button/LogoutButton';

const AppHeader = () => {
  const { account } = useSelector(state => state.account);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '100px' }} />
        
        <Typography 
          variant="h6" 
          component="div" 
          align="center"
          sx={{ flexGrow: 0 }}
        >
          Employee Management System
        </Typography>
        
        <Box sx={{ width: '100px', display: 'flex', justifyContent: 'flex-end' }}>
          {account ? <LogoutButton /> : <LoginButton />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;