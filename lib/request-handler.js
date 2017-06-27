var db = require('./dbConfig');
var User = require('../models/users');
var BuddyRequest = require('../models/buddyRequest');
var sessionHandler = require('./session-handler');

exports.getIndex = function(req,res) {

  if (req.session ? !!req.session.user : false) {
    console.log('user exists in session. logging in.');
    res.render('index');
  } else {
    console.log('user does not exist in session, redirecting to login. ');
    res.redirect('/login');
  }


};

exports.getTest = function(req,res) {
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

	console.log('req.body', req.body);
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username} , function(err, user) {
    if (err) {
      sessionHandler.error(err);
    } else if (!user) {
      console.log('Please sign in')
      sessionHandler.delete(req, res, '/signup');
    } else {
      //check if password matches the username, if so error
      if (password === username) {
        console.log('Password should not match username');
        res.redirect('/login');
      //if not, make new session and return and redirects to index
      } else if (password === user.password) {
        sessionHandler.regenerate(req, res, user);
      } else {
        console.log('Incorrect username or password');
        res.redirect('/login');
      }
    }
  });
};

exports.getLogout = function(req,res) {
  sessionHandler.delete(req, res, '/login');
};


exports.getSignup = function(req,res) {
	res.render('signup');
};

exports.postSignup = function(req,res) {
  var username = req.body.username;
  var password = req.body.password;
  var newUser = {
    username: username,
    password: password,
    gender: req.body.gender,
    age: req.body.age,
    zipCode: req.body.zipCode,
    interests: req.body.interests,
    requestHistory: req.body.requestHistory
  };

  //check if user exists
  User.findOne({username: username} , function(err, user) {
    if (err) {
      sessionHandler.error(err);
    //if so, error
    } else if (user) {
      console.log('Username already in use');
      res.redirect('/signup');
    } else {
      //check if password matches the username, if so error
      if (password === username) {
        console.log('Password should not match username');
        res.redirect('/signup');
      //if not, make new session and return and redirects to index
      } else {
        new User(newUser).save(function(err, user) {
          if (err) {
            sessionHandler.error(err);
          } else if (!user) {
            sessionHandler.error('Database Error');
          } else {
            sessionHandler.regenerate(req, res, user);
          }
        });
      }
    }
  });
};

exports.getBuddyRequest = function(req, res) {
  //http://www.zipcodeapi.com/API#distance
  // 50 api requests per hour
  console.log(req.body, req.query, typeof req.query.age);
  var query = BuddyRequest;
  /*
  {age: {'$lte': 30, '$gte': 20},
   activityNoun: 'Golf',
  }



   */
  console.log('req.query: ', req.query);

  if (typeof req.query.age === 'string') {
    var parsed = JSON.parse(req.query.age);
    delete req.query.age;
    var keys = Object.keys(parsed);
    keys.map(function(cur) {
      var params = ['$gte', '$lte', '$lt', '$gt'];
      params.map(function(curParam) {
        if (cur === curParam) {
          console.log('key is ',cur, parsed[cur],typeof parsed[cur]);
          var trimmedCur = cur.slice(1);
          query = query.where('age')[trimmedCur](parsed[cur]);
        }
      });
    });
  }
  query = query.find(req.query);
  query.exec(function(err,results) {
    if (err) { console.error(err); }
    console.log(err,results);
    res.status(200).send(results);
  });
/*

    // {name: 'alex', zipcode: '{$gte: 90000}'}
    req.query.zipcode = JSON.parse(req.query.zipcode);
    delete req.query.zipcode
    console.log(req.query);

  } else {
    var query = BuddyRequest.find(req.query);
  }
  var promise = query.exec();
  promise.addBack(function (err, docs) {
    if (err) { console.error(err); }
    //console.log(docs);
    res.status(200).send(docs);
  });
  */

};

exports.postBuddyRequest = function(req, res) {
  console.log('request body: ',req.body);
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
