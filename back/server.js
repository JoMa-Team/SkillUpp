const express = require("express");
const app = express()
//import mongoose from "mongoose";
//import MongoStore from "connect-mongo";
const connectDB = require("./config/database");

require('dotenv').config({path: "./config/.env"});
const PORT = process.env.PORT;
connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});