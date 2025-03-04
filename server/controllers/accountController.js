import Account from '../models/accountModel.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Request body:', req.body);

    try {
        const account = await Account.findOne({ where: { email } });

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, account.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json(account);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};
