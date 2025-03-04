import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { openModal } from '../../actions/modalActions';

const CreateAttendanceButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(null)); 
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      startIcon={<AddIcon />}
      onClick={handleClick}
    >
      Create Attendance
    </Button>
  );
}

export default CreateAttendanceButton; 