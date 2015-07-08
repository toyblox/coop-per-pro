var mongoose = require('mongoose');

var Owner = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String, required: true },
	phone: { type: Number, require: true },
	coop: {}
});

module.exports = mongoose.model('Owner', Owner);