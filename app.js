const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/templates/index.html');
});

app.get('/cam', (req, res) => {
	res.sendFile(__dirname + '/public/templates/cam.html');
});

app.get('/temp', (req, res) => {
	res.sendFile(__dirname + '/public/templates/temp.html');
});

app.get('/indoor', (req, res) => {
	res.sendFile(__dirname + '/public/templates/indoor.html');
});

app.get('/outdoor', (req, res) => {
	res.sendFile(__dirname + '/public/templates/outdoor.html');
});

app.listen(4141);

// npm start in shell to initiate web server