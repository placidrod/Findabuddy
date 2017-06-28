var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  recipient: String,
  sender: String,
  message: String,
  date: { type: Date, default: Date.now },
  read: false
});

var Message = mongoose.model('Message', messageSchema);


var newMessage = new Message({
    recipient: 'Luke',
    sender: 'Darth',
    messages: 'I am your father!!',
}).save();


module.exports = Message;