var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	gender: String,
	age: Number,
	zipCode: Number,
	interests: [],
	requestHistory: []
});

var User = mongoose.model('User', userSchema);

// var newUser = new User ({
// 	username: "john doe1",
// 	password: "123",
// 	gender: "male",
// 	age: 30,
// 	zipCode: 33456,
// 	interests: [],
// 	requestHistory: []
// }).save();


module.exports = User;