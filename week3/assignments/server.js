const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// The mongoose version I used is mongoose@6.10.0

app.use(express.json())
app.use(morgan('dev'))

// connect to the Database

mongoose.connect('mongodb://localhost:27017/routing')
.then(console.log('MongoDB connected with the Server'))

// Routes
app.use("/user", require("./routes/userRouter"))
app.use("/issues", require("./routes/issueRouter"))
app.use("/comments", require("./routes/commentRouter"))

app.listen(9000, () => {
    console.log("Server started on port 9000")
})