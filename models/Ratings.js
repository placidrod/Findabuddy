/*
 Mongoose model for Buddy Requests
 */

var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
  reviewer: String,
  reviewee: String,
  buddyRequestId: String,
  rating: Number,
  reviewText: String
});

var Rating = mongoose.model('Rating', ratingSchema);

// var newRating = new Rating ({
// 	reviewer: "john doe 1",
// 	reviewee: "odb",
//   BuddyRequestId: "594d6887db92c43b1d2aee73",
//   rating: 5,
//   reviewText: 'dude is awesome and stuff'
// }).save();


module.exports = Rating;