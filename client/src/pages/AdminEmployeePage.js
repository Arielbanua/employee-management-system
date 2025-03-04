import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CssBaseline, Paper } from '@mui/material';
import Employees from '../components/Employees/Employees';
import EmployeeForm from '../components/Form/EmployeeForm';
import { getEmployees } from '../actions/employeesAction';
import { closeModal } from '../actions/modalActions';
import AppSidebar from '../components/Bars/AppSidebar';
import AppHeader from '../components/Bars/AppHeader';
import Modal from '../components/Modal/Modal';

const AdminEmployeePage = () => {
    const dispatch = useDispatch();
    const { isOpen, employeeId } = useSelector((state) => state.modal);

    useEffect(() => {
        dispatch(getEmployees());
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
                
                    <Employees />
                </Paper>
            </Box>
            
            <Modal isOpen={isOpen} closeModal={closeModalHandler}>
                <EmployeeForm employeeId={employeeId} closeModal={closeModalHandler} />
            </Modal>
        </Box>
    );
}

export default AdminEmployeePage;