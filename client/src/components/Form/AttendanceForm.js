import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { createAttendance } from '../../actions/attendanceActions'; 
import { closeModal } from '../../actions/modalActions';

const AttendanceForm = () => {
  const [attendanceData, setAttendanceData] = useState({
    name: '',
    date: '',
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
    <div>
      <h1>Submit Attendance</h1>
      <form onSubmit={handleSubmit} className="attendance-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={attendanceData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={attendanceData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} required />
        </div>
        <button type="submit">Submit Attendance</button>
      </form>
    </div>
  );
};

export default AttendanceForm; 