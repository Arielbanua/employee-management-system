import * as api from '../api/attendanceApi';

export const createAttendance = (attendanceData) => async (dispatch) => {
    try {
        const { data } = await api.createAttendance(attendanceData);
        dispatch({ type: 'CREATE_ATTENDANCE', payload: data });
    } catch (error) {
        console.error("Error creating attendance:", error.response ? error.response.data : error.message);
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
