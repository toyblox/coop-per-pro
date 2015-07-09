var mongoose = require('mongoose');

var User = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	faveCoops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coop' }]
});

module.exports = mongoose.model('User', User);