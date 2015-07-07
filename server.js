var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var Coop = require('./api/controllers/CoopCtrl');

var port = 8989;
var mongoUri = 'mongodb://localhost/coop';

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.post('/api/coops', Coop.createCoop);

app.get('/api/coops', Coop.readCoops);

app.get('/api/coops/:coopId', Coop.readCoop);

app.put('/api/coops/:coopId', Coop.updateCoop);

app.delete('/api/coops/:coopId', Coop.deleteCoop);



mongoose.connect(mongoUri, function(err) {
	if(err) {
		console.log(err);
		return;
	}
});

mongoose.connection.once('open', function() {
	console.log('mongo connected', mongoUri);
});

app.listen(port, function() {
	console.log('ready, go on', port);
});

