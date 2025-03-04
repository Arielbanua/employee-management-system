import React from 'react';
import { Modal as MuiModal, Paper } from '@mui/material';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper 
        elevation={24}
        sx={{ 
          width: '80%',
          maxWidth: 600,
          p: 4,
          outline: 'none',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {children}
      </Paper>
    </MuiModal>
  );
};

export default Modal;