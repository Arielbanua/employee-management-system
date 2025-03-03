import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import employeeRoutes from './routes/employeeRoute.js'
import attendanceRoutes from './routes/attendanceRoute.js'
import accountRoutes from './routes/accountRoute.js'


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors()); //aaf

app.use('/employee', employeeRoutes)
app.use('/attendance', attendanceRoutes)
app.use('/account', accountRoutes)



app.listen(5000, ()=> console.log('Server up and running...'));