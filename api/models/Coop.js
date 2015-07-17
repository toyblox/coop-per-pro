var mongoose = require('mongoose');

var Coop = new mongoose.Schema({
	name: { type: String, required: true },
	owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner'}],
	address: { type: String, required: true },
	location: {
		lat: String,
		lng: String
	},
	chickens: { type: Number, required: true },
	feed_type: { type: String, enum: ['organic', 'conventional'], required: true },
	status: { type: String, enum: ['laying', 'not laying'], required: true },
	faveByUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Coop', Coop);

// "name": "alicia",
// "address": "364 n. main st. slc utah 84103",
// "location": {
// 	"lat":"40.777672",
// 	"lng": "-111.89174100000002"
// },
// "chickens": "6",
// "feed_type": "organic",
// "status": "laying"