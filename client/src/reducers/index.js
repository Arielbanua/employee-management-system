import { combineReducers } from "redux";
import employeesReducer from './employeesReducer'
import modalReducer from "./modalReducer";
import attendanceReducer from './attendanceReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    modal: modalReducer,
    employees: employeesReducer, 
    attendance: attendanceReducer,
    account: accountReducer,
})