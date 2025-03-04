import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Grid,
  InputLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from 'react-redux';
import { createAttendance } from '../../actions/attendanceActions'; 
import { closeModal } from '../../actions/modalActions';

const AttendanceForm = () => {
  const [attendanceData, setAttendanceData] = useState({
    name: '',
    image: '',
  });

  const dispatch = useDispatch();
  const employeeId = 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData({
      ...attendanceData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    const reader = new FileReader();

    reader.onloadend = () => {
      setAttendanceData({
        ...attendanceData,
        image: reader.result, 
      });
    };

    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAttendance({ ...attendanceData, employeeId }));
    console.log('Attendance submitted:', attendanceData);
    dispatch(closeModal());
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Submit Attendance
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={attendanceData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <InputLabel htmlFor="image-upload">Image</InputLabel>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
              sx={{ mt: 1 }}
            >
              Upload Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                hidden
                required
              />
            </Button>
            {attendanceData.image && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Image uploaded
                </Typography>
              </Box>
            )}
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
              Submit Attendance
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AttendanceForm; 