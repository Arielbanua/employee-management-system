import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { logoutUser } from '../../actions/accountActions';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <Button 
            color="inherit" 
            onClick={handleLogout}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;