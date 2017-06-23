var db = require('./dbConfig');
var User = require('../models/users');
var BuddyRequest = require('../models/buddyRequest');

exports.getIndex = function(req,res) {
	res.render('index');
};

exports.getProfile = function(req,res) {
	var username = req.body.username;
	User.find({username: username}, function(err, data) {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(data);
	})
};

exports.getLogin = function(req,res) {
	res.render('login');
};

exports.postLogin = function(req,res) {
	//check if password matches the username
		//if so, error
		//if not, make new session and return and redirects to index
};

exports.getLogout = function(req,res) {
	//regenerate session and send as response
};

exports.getSignup = function(req,res) {
	res.render('signup');
};

exports.postSignup = function(req,res) {
	//check if user exists
		//if so, error
		//if not, make new session and return and redirects to index
};

exports.getBuddyRequest = function(req, res) {

};

exports.postBuddyRequest = function(req, res) {
  new BuddyRequest(req.body).save()
  .then(
  	function() {
      res.status(201).send();
    }
  )
  .catch(
    function(err) {
    	console.error(err);
    }
  );
};

exports.get404 = function(req,res) {
	res.status(404);
	res.send();
};
