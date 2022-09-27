import express from 'express';
import dotenv from "dotenv";
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

// IMPORT DATABASE FILE 
import connectDb from './Config/DB.js';
dotenv.config({path: './Config/config.env'});
connectDb();


// IMPORT ROUTE FILE 
import Todo from './Routes/ToDo.js';

// USE MIDDLEWARE 
app.use(helmet());
app.use(morgan('common'));
app.use(cors())
app.use(express.json());
app.use('/', Todo);


app.listen(process.env.PORT || 5000, () => console.log('Server is upto port 5000!'))