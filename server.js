const path = require('path');
const express = require('express');
//const mongoose = require("mongoose");
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env'});

// Connecting to DB
connectDB();

//We innitialized app for express
const app = express();

// Body-Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.get("/", (req, res) => {
    res.json({msg: "Welcome to server.js folder!!"})
})

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));