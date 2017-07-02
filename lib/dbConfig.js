/*
  configuration file for mongoDB
 */

var mongoose = require('mongoose');

//mongoURI = 'mongodb://localhost/userdb';
mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection err'));

db.once('open', function() {
	console.log('Mongodb connection is open');
});