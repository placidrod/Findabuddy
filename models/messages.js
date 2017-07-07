/*
 Mongoose model for Buddy Requests
 */

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  sender: String,
  text: String,
  date: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});

var Message = mongoose.model('Message', messageSchema);


module.exports = Message;
