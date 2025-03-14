const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const connect = require("./db/db");

const app = express();
dotenv.config();

// To connect db
connect();

// for cookie parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);

module.exports = app;
