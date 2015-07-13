var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var Coop = require('./api/controllers/CoopCtrl');
var Owner = require('./api/controllers/OwnerCtrl');
var User = require('./api/controllers/UserCtrl');

var port = 8989;
var mongoUri = 'mongodb://localhost/coop';

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(cors());



//coop operations

app.post('/api/coops', Coop.createCoop);

app.get('/api/coops', Coop.readCoops);

app.get('/api/coops/:coopId', Coop.readCoop);

app.put('/api/coops/:coopId', Coop.updateCoop);

app.delete('/api/coops/:coopId', Coop.deleteCoop);

app.post('/api/coops/:coopId/owners/:ownerId', Coop.addOwner);

app.post('/api/coops/:coopId/users/:userId', Coop.favoritedBy);


// owner operations

app.post('/api/owners', Owner.createOwner);

app.get('/api/owners', Owner.readOwners);

app.get('/api/owners/:ownerId', Owner.readOwner);

app.put('/api/owners/:ownerId', Owner.updateOwner);

app.delete('/api/owners/:ownerId', Owner.deleteOwner);



//user operations

app.post('/api/users', User.createUser);

app.get('/api/users', User.readUsers);

app.get('/api/users/:userId', User.readUser);

app.put('/api/users/:userId', User.updateUser);

app.delete('/api/users/:userId', User.deleteUser);

app.post('api/users/:userId/coops/:coopId', User.faveCoops);



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

