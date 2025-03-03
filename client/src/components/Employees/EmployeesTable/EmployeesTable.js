import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteButton from '../../DeleteButton/DeleteButton';
import UpdateButton from '../../UpdateButton/UpdateButton';
import './styles.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'position', headerName: 'Position', width: 150 },
  { field: 'birthday', headerName: 'Birthday', width: 120 },
  { field: 'address', headerName: 'Address', width: 200 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <UpdateButton employeeId={params.row.id} />
        <DeleteButton employeeId={params.row.id} />
      </>
    ),
  },
];

const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees);

  const rows = employees.map(employee => ({
    id: employee.id,
    name: employee.name,
    gender: employee.gender,
    position: employee.position,
    birthday: employee.birthday,
    address: employee.address,
  }));

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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

export default EmployeesTable;