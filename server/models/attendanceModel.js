import { DataTypes } from '@sequelize/core';
import db from '../config/Database.js';
import Employee from './employeeModel.js';

const Attendance = db.define('attendances', {
    employeeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Employee,
            key: 'id',
        },
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT, 
        allowNull: true,
    },
}, {
    freezeTableName: true,
});

Employee.hasMany(Attendance, { foreignKey: 'employeeId' });
Attendance.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Attendance;

(async () => {
    await db.sync();
})();
