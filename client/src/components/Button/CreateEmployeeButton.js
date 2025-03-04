import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { openModal } from '../../actions/modalActions';

const CreateEmployeeButton = () => {
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
      Create Employee
    </Button>
  );
}

export default CreateEmployeeButton;