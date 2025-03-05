import Employee from "../models/employeeModel.js";
import Account from "../models/accountModel.js";
import bcrypt from 'bcrypt';

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{
                model: Account,
                attributes: ['email', 'role']
            }]
        });
        console.log(employees)
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export const createEmployee = async (req, res) => {
    try {
        const { name, gender, position, birthday, address, email, role } = req.body; 
        const newEmployee = await Employee.create({ name, gender, position, birthday, address });

        const defaultPassword = `EMP-${birthday}`; // Format: EMP-YYYY-MM-DD
        console.log(defaultPassword)
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);

        await Account.create({
            employeeId: newEmployee.id,
            email: email, 
            password: hashedPassword, 
            role: role
        });

        const employee = await Employee.findOne({
            where: { id: newEmployee.id },
            include: [{
                model: Account,
                attributes: ['email', 'role']
            }]
        });

        res.status(201).json(employee);
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
    const { name, gender, position, birthday, address, email, role } = req.body;
    
    try {
        await Employee.update(
            { name, gender, position, birthday, address }, 
            { where: { id } }
        );

        if (email || role) {
            await Account.update(
                { 
                    ...(email && { email }),
                    ...(role && { role })
                },
                { 
                    where: { employeeId: id }
                }
            );
        }

        const employee = await Employee.findOne({
            where: { id },
            include: [{
                model: Account,
                attributes: ['email', 'role']
            }]
        });
        
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (error) {
        console.error('Update error:', error);
        res.status(409).json({ message: error.message });
    }
};