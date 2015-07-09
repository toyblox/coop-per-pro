var User = require('../models/User');

module.exports = {

	createUser: function(req, res) {
		var newUser = new User(req.body);
		newUser.save(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('new user');
		});
	},

	readUser: function(req, res) {
		User.findOne({_id: req.params.userId})
		.populate('faveCoops')
		.exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('got user');
		});
	},

	readUsers: function(req, res) {
		User.find({})
		.populate('faveCoops')
		.exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('got users');
		});
	},

	updateUser: function(req, res) {
		User.findByIdAndUpdate(req.params.userId, req.body, {new: true}, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('user updated');
		});
	},

	deleteUser: function(req, res) {
		User.findByIdAndRemove(req.params.userId, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('deleted!');
		});
	},

	faveCoops: function(req, res) {
		User.findByIdAndUpdate(req.params.userId, {$push:{faveCoops: req.params.coopId}},  {new: true}, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('fave coop added');
		});
	}
}