import * as api from '../api/accountApi';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await api.login(credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        return data.role;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
    }
};
