const serverB = () => {
	const express = require('express');
	const app = express();
	const port = 5000;

	app.listen(port, () => {
		console.log(`Success! Your application is running on port ${port}.`);
	});

	app.get('/', function (req, res) {
		res.send('server B');
	});
};

module.exports = serverB;
