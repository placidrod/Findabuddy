var db = require('./dbConfig');
var User = require('../models/users');
var BuddyRequest = require('../models/buddyRequest');
var Message = require('../models/messages');
var Rating = require('../models/Ratings');

var sessionHandler = require('./session-handler');



exports.getIndex = function(req,res) {
  //https://stackoverflow.com/questions/6096492/node-js-and-express-session-handling-back-button-problem
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  if (req.session ? !!req.session.user : false) {
    console.log('user exists in session. logging in.');
    // console.log('session: ',req.session)
    res.render('index');
  } else {
    console.log('user does not exist in session(line 14), redirecting to login. ');
    res.redirect('/login');
  }
};

exports.getTest = function(req,res) {
  res.render('index');
};


exports.getUser = function(req, res) {
  console.log('REQ SESSION', req.session.user.username)
  res.json(req.session.user.username)
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

	console.log('login post, req.body', req.body);
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
        console.log('user is cool: ',user)
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
	res.status(200);
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
  User.findOne({username: username.toLowerCase()} , function(err, user) {
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
        //res.redirect('/signup');
        res.render('signup');
      //if not, make new session and return and redirects to index
      } else if (password === '') {
        console.log('Password should not be an empty string');
        res.redirect('/signup');
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

exports.getSingleBuddyRequest = function (req, res) {

};

exports.getBuddyRequest = function(req, res) {
  //http://www.zipcodeapi.com/API#distance
  // 50 api requests per hour
  //console.log(req.body, req.query, typeof req.query.age);
  var query = BuddyRequest;
  /*
  {age: {'$lte': 30, '$gte': 20},
   activityNoun: 'Golf',
  }
   */
  //console.log('req.query: ', req.query);

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
  var keys = Object.keys(req.query);
  keys.map(function(curKey) {
    if (req.query[curKey] === '') {
      delete req.query[curKey];
    }
    if (curKey === 'age' && req.query[curKey]['$gte'] === '' && req.query[curKey]['$lte'] === '') {
      delete req.query[curKey];
    }
    if (curKey === 'gender' && req.query[curKey] === 'No Preference') {
      delete req.query[curKey];
    }
  });
  console.log('sanitized query: ',req.query)
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
  //console.log('request body: ',req.body);
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

exports.getMessages = function(req, res) {
  //console.log('Get Messages request body: ', req.body);
  Message.find({}, function(err, messages) {
    if (err) {
      res.status(500).send(err);
    } else {
      //console.log('Messages', messages);
      res.status(200).send(messages.reverse());
    }
  });
};

exports.getMessagesByRecipient = function(req, res) {
  console.log('Get Messages request param:', req.query);
  var user = req.query.recipient;
  //console.log('Get Messages per recipient ', user);
  Message.find({'recipient' : user}, function(err, messages) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(messages.reverse());
    }
  });
};


exports.postMessage = function(req, res) {
  //console.log('POST request body: ',req.body);

  var newMessage = {
    recipient: req.body.recipient,
    sender: req.body.sender,
    message: req.body.message,
  }

  new Message(newMessage).save()
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
}

//Need to add a put message

//adding filtering logic
var getRating = function(buddyRequestId, username, callback) {
  var searchObj = {};

  if (buddyRequestId) {
    searchObj.buddyRequestId = buddyRequestId;
  } else if (username) {
    searchObj.username = username;
  }

  Rating.find(searchObj).exec(function(err, ratings) {
    callback(ratings);
  });
};


//keep, but not exposed
var getUserAverageRating = function(username) {
  /*
    TODO: change to averaging results from 'Results' table
  User.findOne({user})
  .exec(function(err, user) {
    if (user) {
      ratings = user.ratings.reduce(function(acc, rating) {
        return acc + parseInt(rating, 10);
      }, 0);
      ratings = (ratings / user.ratings.length).toFixed(1);
      res.status(200).send(ratings);
    } else {
      res.send('failed to retrieve rating')
    }
  });
  */
};

exports.updateRating = function(req,res) {
  // TODO: implement me
};

exports.getRequestRatings = function(req,res) {
  console.log('getting ratings for BRId: ',req.params.request_id);
  Rating.find({BuddyRequestId: req.params.request_id}, function(err, results) {
    if (err) { console.error(err); }
    res.status(200).send(results);
  });

};

exports.postRating = function(req, res) {
  var newRating = {
    reviewer: req.body.reviewer,
    reviewee: req.body.reviewee,
    buddyRequestId: req.body.buddyRequestId,
    rating: req.body.rating,
    reviewText: req.body.reviewText
  }

  console.log('req session id: ', req.session)

  new Rating(newRating).save()
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
