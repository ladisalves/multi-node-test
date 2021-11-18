// server.js
const serverA = () => {
	const express = require('express');
	const app = express();
	const port = 4000;

	app.listen(port, () => {
		console.log(`Success! Your application is running on port ${port}.`);
	});

	app.get('/', function (req, res) {
		res.send('server A');
	});
};

module.exports = serverA;
