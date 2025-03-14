const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
	for (let i = 0; i < 10000000000; i++) {}
	res.send("Hello World");
});

app.get("/stress-test", (req, res) => {
	for (let i = 0; i < 10000000000; i++) {}
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
