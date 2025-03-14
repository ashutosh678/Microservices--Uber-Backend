const express = require("express");
const cluster = require("cluster");
const os = require("os");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

if (cluster.isMaster) {
	const numCPUs = os.cpus().length;
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`);
	});
} else {
	app.get("/", (req, res) => {
		for (let i = 0; i < 10000000000; i++) {}
		res.send("Hello World");
	});

	app.listen(3002, () => {
		console.log("stress Server is running on port http://localhost:3002");
	});
}
