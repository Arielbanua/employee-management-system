import api from './index';

const url = '/account';

export const login = (credentials) => api.post(`${url}/login`, credentials);
