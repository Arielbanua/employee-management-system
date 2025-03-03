import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/accountActions';
import { useNavigate } from 'react-router-dom';
import AttendanceTable from '../components/Attendances/AttendancesTable/AttendancesTable';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accountData = await dispatch(loginUser({ email, password })); 

        if (accountData) {
            if (accountData === 'admin') {
                navigate('/admin-employee');
            } else {
                navigate('/user-attendance');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
