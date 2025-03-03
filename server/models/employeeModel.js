import { DataTypes } from '@sequelize/core';
import db from '../config/Database.js';

const Employee = db.define('employees',{
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    position: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    
},{
    freezeTableName: true
})

export default Employee;

(async()=>{
    await db.sync();
})();