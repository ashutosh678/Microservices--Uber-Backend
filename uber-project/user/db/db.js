const mongoose = require("mongoose");

function connect() {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log("User Service connected to MongoDB");
		})
		.catch((err) => {
			console.log("error : ", err);
		});
}

module.exports = connect;
