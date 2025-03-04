import { combineReducers } from "redux";
import employeesReducer from './employeesReducer'
import modalReducer from "./modalReducer";
import attendanceReducer from './attendanceReducer';
import accountReducer from './accountReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
    modal: modalReducer,
    employees: employeesReducer, 
    attendance: attendanceReducer,
    account: accountReducer,
    notification: notificationReducer
})