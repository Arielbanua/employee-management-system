import axios from 'axios';

const url = "http://localhost:5000/employee";

export const fetchEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);
export const updateEmployee = (id, updatedEmployee) => axios.patch(`${url}/${id}`, updatedEmployee);