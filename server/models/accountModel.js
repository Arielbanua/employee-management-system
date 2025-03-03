import { DataTypes } from '@sequelize/core';
import db from '../config/Database.js';
import Employee from './employeeModel.js';

const Account = db.define('accounts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    employeeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Employee,
            key: 'id',
        },
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
});

Employee.hasOne(Account, { foreignKey: 'employeeId' });
Account.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Account;

(async () => {
    await db.sync();
})();
