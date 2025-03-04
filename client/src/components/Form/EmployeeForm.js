import React, { useEffect, useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Grid, 
  MenuItem, 
  Select, 
  FormControl, 
  InputLabel
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, getEmployeeById, updateEmployee } from '../../actions/employeesAction';
import { closeModal } from '../../actions/modalActions';

const EmployeeForm = ({ employeeId }) => {
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
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        {employeeId ? 'Update Employee' : 'Add Employee'}
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={employeeData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={employeeData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                name="gender"
                value={employeeData.gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value="" disabled>Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Position"
              name="position"
              variant="outlined"
              value={employeeData.position}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={employeeData.birthday}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                value={employeeData.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="" disabled>Select Role</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              variant="outlined"
              value={employeeData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              {employeeId ? 'Update Employee' : 'Add Employee'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmployeeForm;