import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

api.interceptors.request.use((config) => {
    const account = JSON.parse(localStorage.getItem('account'));
    if (account?.token) {
        config.headers.Authorization = `Bearer ${account.token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('account');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;