const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/templates/index.html');
});

app.get('/cam', (req, res) => {
	res.sendFile(__dirname + '/public/templates/cam.html');
});

app.listen(6969);