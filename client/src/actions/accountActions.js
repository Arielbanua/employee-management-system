import * as api from '../api/accountApi';
import { showNotification } from './notificationAction';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await api.login(credentials);
        
        localStorage.setItem('account', JSON.stringify(data));
        
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        dispatch(showNotification('Login successful', 'success'));
        return data.user.role;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response?.data?.message || 'Login failed' });
        dispatch(showNotification(error.response.data.message, 'error'));
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('account');
    dispatch({ type: 'LOGOUT' });
    dispatch(showNotification('Logged out successfully', 'success'));
};

export const checkAuthState = () => (dispatch) => {
    const account = localStorage.getItem('account');
    if (account) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(account) });
    }
};
