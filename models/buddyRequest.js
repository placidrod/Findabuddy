/*
  Mongoose model for Buddy Requests
 */

var mongoose = require('mongoose');

var buddyRequestSchema = mongoose.Schema({
	user: String,
	gender: String,
	minAge: Number,
	maxAge: Number,
	zipCode: Number,
  activityNoun: String,
  activityVerb: String,
	postTitle: String,
  postDateTime: String,
	description: String,
	associatedPeople: []
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
//  associatedPeople: ['bob doe']
// }).save();


module.exports = BuddyRequest;