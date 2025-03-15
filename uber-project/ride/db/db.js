const mongoose = require("mongoose");

function connect() {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log("ride service connected to MongoDB");
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = connect;
