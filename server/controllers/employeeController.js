import Employee from "../models/employeeModel.js";
import Account from "../models/accountModel.js";
import bcrypt from 'bcrypt';

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{
                model: Account,
                required: true
            }]
        });
        res.status(200).json(employees)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { name, gender, position, birthday, address, email, role } = req.body; 
        const newEmployee = await Employee.create({ name, gender, position, birthday, address });

        const defaultPassword = `EMP`; // Format: EMPYYYYMMDD
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);

        const newAccount = await Account.create({
            employeeId: newEmployee.id,
            email: email, 
            password: hashedPassword, 
            role: role
        });

        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteEmployee = async (req, res) => {
    const { id } = req.params; 
    try {
        await Employee.destroy({ where: { id } }); 
        res.status(204).send(); 
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedEmployee = await Employee.update(req.body, { where: { id } });
        if (updatedEmployee[0] === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        const employee = await Employee.findByPk(id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};