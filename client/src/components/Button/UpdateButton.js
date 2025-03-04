import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modalActions';

const UpdateButton = ({ employeeId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(employeeId));
  };

  return (
    <button onClick={handleClick} style={{ color: 'green' }}>
      Update
    </button>
  );
};

export default UpdateButton;