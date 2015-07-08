var Owner = require('../models/Owner');

module.exports = {

	createOwner: function(req, res) {
		newOwner = new Owner(req.body);
		newOwner.save(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('new owner added');
		});
	},

	readOwner: function(req, res) {
		Owner.findOne({_id: req.params.ownerId}).exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('got it');
		});
	},

	readOwners: function(req, res) {
		Owner.find({}).exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('got it all');
		});
	},


	updateOwner: function(req, res) {
		Owner.findByIdAndUpdate(req.params.ownerId, req.body, function(err, response){
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('owner updated');
		});
	},

	deleteOwner: function(req, res) {
		Owner.findByIdAndRemove(req.params.ownerId, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('owner deleted!');
		});
	}

};