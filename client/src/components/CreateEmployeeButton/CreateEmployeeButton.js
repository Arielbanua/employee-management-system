import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modalActions';

const CreateEmployeeButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(null)); // Dispatch openModal with null to indicate creating a new employee
  };

  return (
    <button onClick={handleClick} style={{ color: 'blue' }}>
      Create Employee
    </button>
  );
}

export default CreateEmployeeButton;