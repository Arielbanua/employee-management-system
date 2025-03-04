import api from './index';

const url = '/employee';

export const fetchEmployees = () => api.get(url);
export const createEmployee = (newEmployee) => api.post(url, newEmployee);
export const updateEmployee = (id, updatedEmployee) => api.patch(`${url}/${id}`, updatedEmployee);
export const deleteEmployee = (id) => api.delete(`${url}/${id}`);