const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const connect = require("./db/db");
const rabbitMQ = require("./service/rabbit.service");

rabbitMQ.connect();

const app = express();

// To connect db
connect();

// for cookie parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", userRoutes);

module.exports = app;
