import dotenv from 'dotenv';
import express from 'express'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; // Cross-Origin Resource Sharing
import morgan from 'morgan'; // Logger

import routers from './routers'; // import routers

dotenv.config(); // load .env file

const app = express(); // create express app

// middlewares
app.use(cors()); // enable cors
app.use(morgan('dev')); // log requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Database 
// Password mongoDB: DJ4g1dyajeg072bd
const URI = process.env.DB_CONNECTION; // get db connection string from .env file
mongoose.connect(URI, {
    autoIndex: false, // disable automatic index creation

}, (err) => {
    if (err) throw err; // throw error if connection failed
    console.log('Database connected.'); // log message if connection successful
})

// Routes
app.use('/api', routers); // use routers

// Start server on port
const PORT = process.env.PORT || 5000; // 5000 is the default port, if not specified by the user

app.listen(PORT, () => {    // listen on port 5000
    console.log(`Server started on port ${PORT}`);
    }
);


