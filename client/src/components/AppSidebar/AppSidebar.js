import React from 'react';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/user-attendance">Employee Data</Link>
        </li>
      </ul>
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to="/admin-employee">Employee Data</Link>
        </li>
        <li>
          <Link to="/admin-attendance">Employee Attendance</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppSidebar;