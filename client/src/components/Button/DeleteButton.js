import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../actions/employeesAction';

const DeleteButton = ({ employeeId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEmployee(employeeId));
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteButton;