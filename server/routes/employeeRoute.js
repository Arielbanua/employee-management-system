import express from "express";
import { getEmployees, createEmployee, deleteEmployee, updateEmployee } from "../controllers/employeeController.js";

const router = express.Router()

router.get('/', getEmployees)
router.post('/', createEmployee)
router.delete('/:id', deleteEmployee)
router.patch('/:id', updateEmployee)


export default router;