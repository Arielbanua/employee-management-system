import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminEmployeePage from '../pages/AdminEmployeePage';
import AdminAttendancePage from '../pages/AdminAttendancePage';
import UserAttendancePage from '../pages/UserAttendancePage';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/admin-employee' element={<AdminEmployeePage />} />
      <Route path='/admin-attendance' element={<AdminAttendancePage />} />
      <Route path='/user-attendance' element={<UserAttendancePage />} />
      <Route path='/login' element={<LoginPage />} />

    </Routes>
  )
}

export default AppRoutes;