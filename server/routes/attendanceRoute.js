import express from "express";
import { createAttendance, getAttendances } from "../controllers/attendanceController.js"; 

const router = express.Router();

router.post('/', createAttendance); 
router.get('/', getAttendances);

export default router;
