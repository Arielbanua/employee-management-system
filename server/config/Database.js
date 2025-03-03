import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const db = new Sequelize({
  dialect: PostgresDialect,
  database: 'employee_db',
  user: 'postgres',
  password: 'Ariel123!',
  host: 'localhost',
  port: 5432
});

export default db;