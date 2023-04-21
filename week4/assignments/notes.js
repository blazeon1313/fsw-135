const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressjwt = require('express-jwt');

// middleware
app.use(express.json())
app.use(morgan('dev'))

// The mongoose version I used is mongoose@6.10.0
// connect to the Database
mongoose.connect('mongodb://localhost:27017/routing')
.then(console.log('MongoDB connected with the Server'))

// endpoints
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api/comments', require('./routes/issueRouter'))
app.use('/api/issues', require('./routes/issueRouter'))

// server listener
app.listen(9000, () => {
    console.log('Server is running on port 9000')
})