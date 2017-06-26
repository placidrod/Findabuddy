var mongoose = require('mongoose');

var buddyRequestSchema = mongoose.Schema({
	user: String,
	gender: String,
	age: Number,
	zipCode: Number,
  activityNoun: String,
  activityVerb: String,
	postTitle: String,
  postDateTime: String,
	description: String
});

var BuddyRequest = mongoose.model('BuddyRequest', buddyRequestSchema);

// var newBuddyRequest = new BuddyRequest ({
// 	user: "Ari",
// 	gender: "male",
// 	age: 18,
// 	zipCode: 12345,
// 	activityNoun: 'playing',
// 	activityVerb: 'tennis',
// 	postTitle: "seeking bbb (bread breaking buddy)",
// 	postDateTime: '7/5/17',
// 	description: "read the title"
// }).save();


module.exports = BuddyRequest;