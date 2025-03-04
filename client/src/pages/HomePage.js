import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CssBaseline, Paper, Typography } from '@mui/material';
import AppSidebar from '../components/Bars/AppSidebar';
import AppHeader from '../components/Bars/AppHeader';

const HomePage = () => {
  const { account } = useSelector(state => state.account);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppHeader />
      
      {account && <AppSidebar />}
      
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 3, 
        width: { sm: `calc(100% - ${account ? '240px' : '0px'})` },
        mt: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 5,
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          {account ? (
            <Box>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4
                }}
              >
                Welcome, {account.user.name}!
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary'
                }}
              >
                Position: {account.user.position}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary'
                }}
              >
                Employee ID: {account.user.employeeId}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary'
                }}
              >
                Email: {account.user.email}
              </Typography>
            </Box>
          ) : (
            <Typography 
              variant="h3" 
              align="center"
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Welcome to Employee Management System
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default HomePage;
