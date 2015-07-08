var Coop = require('../models/Coop');

module.exports = {

	createCoop: function(req, res) {
		newCoop = new Coop({
			name: req.body.name,
			owner: req.body.owner,
			address: req.body.address,
			chickens: req.body.chickens,
			feed_type: req.body.feed_type,
			user_favorite: req.body.user_favorite
		});
		newCoop.save(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('new coop added!');
		});
	},

	readCoop: function(req, res) {
		Coop.findOne({_id: req.params.coopId}).exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('got it');
		});
	},

	readCoops: function(req, res) {
		Coop.find({}).exec(function(err, response) {
			if(err) return res.sendStatus(500);
			res.json(response);
			console.log('got it all');
		});
	},

	updateCoop: function(req, res) {
		Coop.findByIdAndUpdate(req.params.coopId, req.body, function(err, response) {
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

	}
};