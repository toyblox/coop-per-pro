var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash = require('connect-flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');

var Coop = require('./api/controllers/CoopCtrl');
var Owner = require('./api/controllers/OwnerCtrl');
var User = require('./api/controllers/UserCtrl');

var port = 8989;
var mongoUri = 'mongodb://localhost/coop';

var authThingy = require('./api/config/passport')(passport);

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(session({ secret: 'whatthefuckisasecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//coop operations
app.post('/api/coops', Coop.createCoop);

app.get('/api/coops', Coop.readCoops);

app.get('/api/coops/:coopId', Coop.readCoop);

app.put('/api/coops/:coopId', Coop.updateCoop);

app.delete('/api/coops/:coopId', Coop.deleteCoop);

app.post('/api/coops/:coopId/owners/:ownerId', Coop.addOwner);

app.post('/api/coops/:coopId/users/:userId', Coop.favoritedBy);



//user operations

app.post('/api/users', User.createUser, function(req, res){
	console.log('REDIRECT');
	res.redirect(200, '/map'); 
});

// app.get('/api/users', User.readUsers);

app.post('/api/users/auth', passport.authenticate('local', {
	successRedirect: '/map',
	failureRedirect: '/signup',
	failureFlash: true
}));

app.get('/api/users/:userId', User.readUser);

app.put('/api/users/:userId', User.updateUser);

app.delete('/api/users/:userId', User.deleteUser);

app.post('api/users/:userId/coops/:coopId', User.faveCoops);


// owner operations

app.post('/api/owners', Owner.createOwner);

app.get('/api/owners', Owner.readOwners);

app.get('/api/owners/:ownerId', Owner.readOwner);

app.put('/api/owners/:ownerId', Owner.updateOwner);

app.delete('/api/owners/:ownerId', Owner.deleteOwner);







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

