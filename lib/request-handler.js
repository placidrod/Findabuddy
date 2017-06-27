var db = require('./dbConfig');
var User = require('../models/users');
var BuddyRequest = require('../models/buddyRequest');

exports.getIndex = function(req,res) {

  if (req.session ? !!req.session.user : false) {
    res.render('index');
  } else {
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
      console.log('User.findOne Error:', err);
      res.status(500);
      res.send();
    } else if (!user) {
      console.log('Please signup');
      req.session.destroy();
      res.status(302);
      res.redirect('/signup');
    } else {
      //check if password matches the username, if so error
      if (password === username) {
        console.log('Error:', 'Password should not match username');
        res.status(403);
        res.redirect('/login');
      //if not, make new session and return and redirects to index
      } else if (password === user.password) {
        req.session.regenerate(function(err) {
          if (err) {
            console.log('req.session.regenerate Error:', err);
            res.status(500);
            res.send();
          } else {
            console.log('Log in successful');
            req.session.user = user;
            delete req.session.user.password;
            res.status(302);
            res.redirect('/');
          }
        });
      } else {
        console.log('Error:', 'Incorrect Username or Password');
        res.status(403);
        res.redirect('/login');
      }
    }
  });
};

exports.getLogout = function(req,res) {
  //regenerate session and send as response
  var user = req.session.user;
  req.session.destroy();
  res.status(302);
  res.redirect('/login');
  /*
  req.session.regenerate(function(err) {
    if (err) {
      console.log('req.session.regenerate Error:', err);
      res.status(500);
      res.send();
    } else {
      console.log('Logout successful');
      req.session.user = user;
      res.status(302);
      //res.send(req.session);
      res.redirect('/login');
    }
  });*/
  //placeholder
	//check if password matches the username
		//if so, error 
		//if not, make new session and return and redirects to index
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
