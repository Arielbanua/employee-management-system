import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminEmployeePage from '../pages/AdminEmployeePage';
import AdminAttendancePage from '../pages/AdminAttendancePage';
import UserAttendancePage from '../pages/UserAttendancePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      
      <Route path='/admin-employee' element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminEmployeePage />
        </ProtectedRoute>
      } />
      
      <Route path='/admin-attendance' element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminAttendancePage />
        </ProtectedRoute>
      } />
      
      <Route path='/user-attendance' element={
        <ProtectedRoute allowedRoles={['user', 'admin']}>
          <UserAttendancePage />
        </ProtectedRoute>
      } />

      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default AppRoutes;