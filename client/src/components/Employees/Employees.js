import React from 'react'
import Employee from './EmployeesTable/EmployeesTable'
import './styles.css';
import { useSelector } from 'react-redux';

const Employees = () => {
    return (
        <>
            <h1>Employees</h1>
            <Employee/>
        </>
    )
}

export default Employees