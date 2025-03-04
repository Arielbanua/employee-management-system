import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendances } from '../actions/attendanceActions';
import AttendanceTable from '../components/Attendances/AttendancesTable/AttendancesTable';
import AppSidebar from '../components/Bars/AppSidebar';
import './styles.css';
import { Box, CssBaseline, Paper } from '@mui/material';
import AppHeader from '../components/Bars/AppHeader';

const AdminAttendancePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAttendances());
    }, [dispatch]);

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            
            <AppHeader />
            
            <Box component="nav" sx={{ width: 240, flexShrink: 0 }}>
                <AppSidebar />
            </Box>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: 8}}>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <AttendanceTable />
                </Paper>
            </Box>
        </Box>
    );
}

export default AdminAttendancePage;