import dotenv from 'dotenv';
import Account from '../models/accountModel.js';
import Employee from '../models/employeeModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const account = await Account.findOne({ 
            where: { email },
            include: [{
                model: Employee,
                attributes: ['id', 'name', 'position']
            }]
        });

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, account.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
            { 
                id: account.id,
                employeeId: account.employeeId,
                role: account.role 
            }, 
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(200).json({
            token,
            user: {
                id: account.id,
                employeeId: account.employeeId,
                email: account.email,
                role: account.role,
                name: account.employees.name,
                position: account.employees.position
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};
