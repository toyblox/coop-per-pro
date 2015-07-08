var mongoose = require('mongoose');

var Coop = new mongoose.Schema({
	name: { type: String, required: true },
	owner: {},
	address: { type: String, required: true },
	chickens: { type: Number, require: true },
	feed_type: { type: String, enum: ['organic', 'conventional'], required: true },
	status: { type: String, enum: ['producing', 'not producing'], required: true },
	user_favorite: []
});

module.exports = mongoose.model('Coop', Coop);