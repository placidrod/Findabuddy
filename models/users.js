/*
 Mongoose model for Buddy Requests
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	gender: String,
	age: Number,
	zipCode: Number,
	interests: [],
	requestHistory: [],
	ratings: [],
  bio: String,
  bioTitle: String
});

var User = mongoose.model('User', userSchema);

// var newUser = new User ({
// 	username: "johndoe1",
// 	password: "123",
// 	gender: "male",
// 	age: 30,
// 	zipCode: 33456,
// 	interests: [],
// 	requestHistory: [],
//  ratings: []
// }).save();


module.exports = User;