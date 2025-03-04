import React, { useState } from 'react';
import { Paper, TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CreateEmployeeButton from '../../Button/CreateEmployeeButton';

const EmployeeToolbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: '60%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <CreateEmployeeButton />
      </Box>
    </Paper>
  );
};

export default EmployeeToolbar;