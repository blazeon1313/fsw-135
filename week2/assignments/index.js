const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');

// For the code to work I had to install an older version of mongoose
// the version of mongoose that worked is mongoose@6.10.0

app.use(express.json())
app.use(morgan('dev'))

// This was shown in the lesson on how to connect 
// to the DB but no longer works.

// connect to Database
// mongoose.connect('mogodb://localhost:27017/Storedb',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     () => console.log("connected to the DB")
// )


// The working code for connecting to the DB

// Connect to the DB
mongoose.connect('mongodb://localhost:27017/routing')
.then(console.log('MongoDB connected with the Server'))


app.use("/", require("./routes/inventoryRouter"))

app.listen(9000, () => {
    console.log("Server started on port 9000")
})