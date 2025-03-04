import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CssBaseline, Paper } from '@mui/material';
import { getAttendances } from '../actions/attendanceActions';
import AttendanceTable from '../components/Attendances/AttendancesTable/AttendancesTable';
import CreateAttendanceButton from '../components/Button/CreateAttendanceButton';
import AppSidebar from '../components/Bars/AppSidebar';
import AppHeader from '../components/Bars/AppHeader';
import Modal from '../components/Modal/Modal';
import AttendanceForm from '../components/Form/AttendanceForm';
import { closeModal } from '../actions/modalActions';

const UserAttendancePage = () => {
    const dispatch = useDispatch();
    const { isOpen, employeeId } = useSelector((state) => state.modal);

    useEffect(() => {
        dispatch(getAttendances()); 
    }, [dispatch]);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            
            <AppHeader />
            
            <Box component="nav" sx={{ width: 240, flexShrink: 0 }}>
                <AppSidebar />
            </Box>
            
            <Box component="main" sx={{ 
                flexGrow: 1, 
                p: 3, 
                width: { sm: `calc(100% - 240px)` },
                mt: 8
            }}>
                
                
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                        <CreateAttendanceButton />
                    </Box>
                    <AttendanceTable />
                </Paper>
            </Box>
            
            <Modal isOpen={isOpen} closeModal={closeModalHandler}>
                <AttendanceForm employeeId={employeeId} closeModal={closeModalHandler} />
            </Modal>
        </Box>
    );
}

export default UserAttendancePage;