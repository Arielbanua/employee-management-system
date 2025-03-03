import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Employees from '../components/Employees/Employees';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';
import './styles.css';
import { getEmployees } from '../actions/employeesAction';
import { closeModal } from '../actions/modalActions';
import AppSidebar from '../components/AppSidebar/AppSidebar';
import CreateEmployeeButton from '../components/CreateEmployeeButton/CreateEmployeeButton';

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
        <>
            <AppSidebar />
            <div className="app-container">
                <div className="app-bar">
                    <h2 className="app-title">Employee Management System</h2>
                </div>
                <CreateEmployeeButton/>
                <div className="grow">
                    <div className="grid-container">
                        <div className="grid-item employees">
                            <Employees />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal closeModal={closeModalHandler}>
                    <Form employeeId={employeeId} />
                </Modal>
            )}
        </>
    );
}

export default AdminEmployeePage;