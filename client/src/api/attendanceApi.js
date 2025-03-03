import axios from 'axios';

const url = 'http://localhost:5000/attendance';

export const createAttendance = (attendanceData) => axios.post(url, attendanceData);
export const fetchAttendances = () => axios.get(url);
