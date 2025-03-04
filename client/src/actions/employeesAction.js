import * as api from '../api/employeeApi';
import { showNotification } from './notificationAction';

export const getEmployees = () => async (dispatch)  =>{
    try {
        const { data } = await api.fetchEmployees();
        console.log('Fetched Employees from action:', data);  
        dispatch({ type: 'FETCH_EMPLOYEES', payload: data})
    } catch (error) {
        console.log("error from getEmployees", error)
    }
};

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee);
        console.log('Created Employee:', data);
        dispatch({ type: 'CREATE_EMPLOYEE', payload: data });
        dispatch(showNotification('Employee created successfully', 'success'));

    } catch (error) {
        console.log("error from createEmployees", error)
        dispatch(showNotification('Failed to create employee', 'error'));
    }
};

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await api.deleteEmployee(id); 
        dispatch({ type: 'DELETE_EMPLOYEE', payload: id }); 
    } catch (error) {
        console.log("error from deleteEmployees", error)
    }
};

export const updateEmployee = (id, updatedEmployee) => async (dispatch) => {
    try {
        const { data } = await api.updateEmployee(id, updatedEmployee);
        dispatch({ type: 'UPDATE_EMPLOYEE', payload: data });
    } catch (error) {
        console.log(error);
    }
};