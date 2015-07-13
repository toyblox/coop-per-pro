var Coop = require('../models/Coop');

module.exports = {

	createCoop: function(req, res) {
		newCoop = new Coop({
			name: req.body.name,
			owner: req.user,
			address: req.body.address,
			chickens: req.body.chickens,
			feed_type: req.body.feed_type,
			status: req.body.status,
			faveByUsers: req.body.user_favorite
		});
		newCoop.save(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('new coop added!');
		});
	},

	readCoop: function(req, res) {
		Coop.findOne({_id: req.params.coopId})
			.populate('owner')
			.exec(function(err, response) {
				if(err) return res.sendStatus(500);
				res.send(response);
				console.log('got it');
			});
	},

	readCoops: function(req, res) {
		Coop.find({})
			.populate('owner')
			.exec(function(err, response) {
				if(err) return res.sendStatus(500);
				res.json(response);
				console.log('got it all');
			});
	},

	updateCoop: function(req, res) {
		Coop.findByIdAndUpdate(req.params.coopId, req.body, {new: true}, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('coop updated');
		});
	},

	deleteCoop: function(req, res) {
		Coop.findByIdAndRemove(req.params.coopId, function(err, response) {
			if(err) return res.sendStatus(500);
			res.json(response);
			console.log('coop deleted!');
		});

	},

	addOwner: function(req, res) {
		Coop.findByIdAndUpdate(req.params.coopId, {$push:{owner: req.params.ownerId}},  {new: true}, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('owner added to coop');
		});
	},

	favoritedBy: function(req, res) {
		Coop.findByIdAndUpdate(req.params.coopId, {$push:{faveByUsers: req.params.userId}}, {new: true}, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('favorited!');
		});
	}
};