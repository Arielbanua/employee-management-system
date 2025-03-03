import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendances } from '../actions/attendanceActions';
import AttendanceTable from '../components/Attendances/AttendancesTable/AttendancesTable';
import CreateAttendanceButton from '../components/CreateAttendanceButton/CreateAttendanceButton';
import AppSidebar from '../components/AppSidebar/AppSidebar';
import Modal from '../components/Modal/Modal';
import AttendanceForm from '../components/Form/AttendanceForm';
import './styles.css';
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
        <>
            <AppSidebar />
            <div className="app-container">
                <div className="app-bar">
                    <h2 className="app-title">Employee Attendance System</h2>
                    <CreateAttendanceButton />
                </div>
                <div className="grow">
                    <div className="grid-container">
                        <div className="grid-item attendances">
                            <AttendanceTable />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal closeModal={closeModalHandler}>
                    <AttendanceForm employeeId={employeeId} />
                </Modal>
            )}
        </>
    );
}

export default UserAttendancePage;