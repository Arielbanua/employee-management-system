import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LoginButton from '../Button/LoginButton';

const AppHeader = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Empty space on the left for balance */}
        <Box sx={{ width: '100px' }} />
        
        {/* Centered title */}
        <Typography 
          variant="h6" 
          component="div" 
          align="center"
          sx={{ flexGrow: 0 }}
        >
          Employee Management System
        </Typography>
        
        {/* Login button on the right */}
        <Box sx={{ width: '100px', display: 'flex', justifyContent: 'flex-end' }}>
          <LoginButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;