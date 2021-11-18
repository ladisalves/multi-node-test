const fetch = require('node-fetch');
const serverA = require('./serverA');
const serverB = require('./serverB');

serverA();
serverB();

const https = require('https');

const httpsAgent = new https.Agent({
	rejectUnauthorized: false,
});

const express = require('express');
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Success! Your application is running on port ${port}.`);
});

app.get('/', function (req, res) {
	res.send('use /a or /b');
});

app.get('/a', function (req, res) {
	console.log('endpoint a');
	fetch('http://localhost:4000', { httpsAgent })
		.then(async (resp) => {
			console.log('fetched a');
			res.send(await resp.text());
		})
		.catch((err) => res.send(err));
});

app.get('/b', function (req, res) {
	fetch('http://localhost:5000', { httpsAgent }).then(async (resp) => {
		console.log('fetched b');
		res.send(await resp.text());
	});
});
