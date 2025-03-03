import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modalActions';  

const CreateAttendanceButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(null)); 
  };

  return (
    <button onClick={handleClick} style={{ color: 'blue' }}>
      Create Attendance
    </button>
  );
}

export default CreateAttendanceButton; 