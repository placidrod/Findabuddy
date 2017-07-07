var mongoose = require('mongoose');

var conversationSchema = mongoose.Schema({
  participants: [String],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

var Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
