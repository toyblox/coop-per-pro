var mongoose = require('mongoose');

var Coop = new mongoose.Schema({
	name: { type: String, required: true },
	owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner'}],
	address: { type: String, required: true },
	chickens: { type: Number, require: true },
	feed_type: { type: String, enum: ['organic', 'conventional'], required: true },
	status: { type: String, enum: ['laying', 'not laying'], required: true },
	faveByUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Coop', Coop);