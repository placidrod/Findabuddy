var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
  reviewer: String,
  reviewee: String,
  BuddyRequestId: String,
  rating: Number,
  reviewText: String
});

var Rating = mongoose.model('Rating', ratingSchema);

// var newUser = new User ({
// 	username: "john doe1",
// 	password: "123",
// 	gender: "male",
// 	age: 30,
// 	zipCode: 33456,
// 	interests: [],
// 	requestHistory: []
// }).save();


module.exports = Rating;