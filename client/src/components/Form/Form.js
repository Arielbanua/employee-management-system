import React, { useEffect, useState } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, getEmployeeById, updateEmployee } from '../../actions/employeesAction';
import { closeModal } from '../../actions/modalActions';

const Form = ({ employeeId }) => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    gender: '',
    position: '',
    birthday: '',
    address: '',
    role: '',
  });

  const employee = useSelector((state) => state.employees.find((employee) => employee.id === employeeId));
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (employeeId) {
      
      setEmployeeData(employee);
  
    } else {
      
      setEmployeeData({
        name: '',
        email: '',
        gender: '',
        position: '',
        birthday: '',
        address: '',
        role: '',
      });
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData, [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employeeId) {
      dispatch(updateEmployee(employeeId, employeeData));
    } else {
      dispatch(createEmployee(employeeData));
    }
    console.log('Form submitted:', employeeData);
    dispatch(closeModal());
  };

  return (
    <div>
      <h1>{employeeId ? 'Update Employee' : 'Add Employee'}</h1>
      <form onSubmit={handleSubmit} className="employee-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employeeData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employeeData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={employeeData.gender} onChange={handleChange} required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employeeData.position} onChange={handleChange} required />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="date" name="birthday" value={employeeData.birthday} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={employeeData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={employeeData.role} onChange={handleChange} required>
            <option value="" disabled>Select Role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <button type="submit">{employeeId ? 'Update Employee' : 'Add Employee'}</button>
      </form>
    </div>
  );
};

export default Form;