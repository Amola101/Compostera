const express = express();
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/templates/index.html');
});

app.listen(6969);