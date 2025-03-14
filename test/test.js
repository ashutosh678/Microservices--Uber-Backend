const autocannon = require("autocannon");

const urls = ["http://localhost:3000", "http://localhost:3000/stress-test"];
const duration = 30;

urls.forEach((url) => {
	const instance = autocannon(
		{
			url,
			duration,
		},
		(err, result) => {
			if (err) {
				console.log("Error:", err);
			} else {
				console.log("Number of requests:", result.totalRequests);
			}
		}
	);
	autocannon.track(instance);
});
