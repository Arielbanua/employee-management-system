import Account from '../models/accountModel.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Request body:', req.body); // Log the request body

    try {
        // Attempt to find the account by email
        const account = await Account.findOne({ where: { email } });

        // Check if the account was found
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, account.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Successful login
        res.status(200).json(account);
    } catch (error) {
        console.error('Login error:', error); // Log the error details
        res.status(500).json({ message: 'Server error', error });
    }
};
