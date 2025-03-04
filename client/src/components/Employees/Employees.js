import React from 'react'
import Employee from './EmployeesContent/EmployeesTable'
import { useSelector } from 'react-redux';
import EmployeeToolbar from './EmployeesContent/EmployeeToolbar';

const Employees = () => {
    return (
        <>
            <EmployeeToolbar/>
            <Employee/>
        </>
    )
}

export default Employees