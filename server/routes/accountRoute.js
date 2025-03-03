import express from 'express';
import { login } from '../controllers/accountController.js';

const router = express.Router();


router.post('/login', login);


export default router;
