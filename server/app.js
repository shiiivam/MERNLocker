const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Configuring environment variables
dotenv.config({path:'./config.env'});

// To connect with database
require('./db/conn');

// bodyparser (middleware) to extract data from requests body
app.use(express.json());

// Importing router for easy use of routes and less crowd in app.js file
app.use(require('./router/auth'));

// PORT frm .env file
const PORT = process.env.PORT;

app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});