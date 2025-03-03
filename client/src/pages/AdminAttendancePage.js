import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendances } from '../actions/attendanceActions';
import AttendanceTable from '../components/Attendances/AttendancesTable/AttendancesTable';
import AppSidebar from '../components/AppSidebar/AppSidebar';
import './styles.css';

const AdminAttendancePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAttendances());
    }, [dispatch]);

    return (
        <>
            <AppSidebar />
            <div className="app-container">
                <div className="app-bar">
                    <h2 className="app-title">Employee Attendance System</h2>
                </div>
                <div className="grow">
                    <div className="grid-container">
                        <div className="grid-item attendances">
                            <AttendanceTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminAttendancePage;