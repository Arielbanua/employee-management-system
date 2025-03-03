import axios from 'axios';

const url = 'http://localhost:5000/account';

export const login = (credentials) => axios.post(`${url}/login`, credentials);
