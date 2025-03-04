import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Box } from '@mui/material';

const AlertNotification = () => {
    const notification = useSelector(state => state.notification);

    if (!notification.message) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
                width: '80%',
                maxWidth: '600px'
            }}
        >
            <Alert 
                severity={notification.severity}
                sx={{ boxShadow: 3 }}
            >
                {notification.message}
            </Alert>
        </Box>
    );
};

export default AlertNotification;
