import * as api from '../api/attendanceApi';
import { showNotification } from './notificationAction';

export const createAttendance = (attendanceData) => async (dispatch) => {
    try {
        const { data } = await api.createAttendance(attendanceData);
        dispatch({ type: 'CREATE_ATTENDANCE', payload: data });
        dispatch(showNotification('Attendance submitted successfully', 'success'));
    } catch (error) {
        dispatch(showNotification('Failed to submit attendance', 'error'));
    }
};

export const getAttendances = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAttendances();
        dispatch({ type: 'FETCH_ATTENDANCES', payload: data });
    } catch (error) {
        console.error("Error fetching attendances:", error);
    }
};
