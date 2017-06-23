var mongoose = require('mongoose');

var buddyRequestSchema = mongoose.Schema({
	owner: String,
	gender: String,
	age: Number,
	zipCode: Number,
	postTitle: String,
	requestDescription: String
});

var BuddyRequest = mongoose.model('BuddyRequest', buddyRequestSchema);

// var newBuddyRequest = new BuddyRequest ({
// 	owner: "Ari",
// 	gender: "male",
// 	age: 18,
// 	zipCode: 12345,
// 	postTitle: "seeking bbb (bread breaking buddy)",
// 	requestDescription: "read the title"
// }).save();


module.exports = BuddyRequest;