import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendances } from '../../../actions/attendanceActions';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'employeeId', headerName: 'Employee ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'date', headerName: 'Date', width: 180},
    { field: 'time', headerName: 'Time', width: 180},
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params) => (
            <img src={params.value} alt="Attendance" style={{ width: '100%', height: 'auto' }} />
        ),
    },
];

const AttendanceTable = () => {
    const dispatch = useDispatch();
    const attendances = useSelector((state) => state.attendance);

    useEffect(() => {
        dispatch(getAttendances());
    }, [dispatch]);

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={attendances}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection={false} 
                disableSelectionOnClick 
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

export default AttendanceTable;