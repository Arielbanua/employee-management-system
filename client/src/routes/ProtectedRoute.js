import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showNotification } from '../actions/notificationAction';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { account } = useSelector(state => state.account);
    const location = useLocation();
    const dispatch = useDispatch();

    if (!account?.token) {
        dispatch(showNotification('Please login to access this page', 'warning'));
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(account.user.role)) {
        dispatch(showNotification('Access denied', 'error'));
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default ProtectedRoute;