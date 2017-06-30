exports.error = function(err) {
  console.error(err);
  res.status(500);
  res.send();
};

exports.isSessionValid = function(req, res, successRedirect) {
  //check by doing $gte & $lte with values of 'ISODate(date.toISOString()) +- 5 minutes
  //while matching username
  //or put the session id in the cookie on creation maybe?
};

exports.regenerate = function(req, res, user) {
  req.session.regenerate(function(err) {
    if (err) {
      exports.error(err)
    } else {
      console.log('session regeneration successful');
      req.session.user = user;
      delete req.session.user.password;
      res.json({status: '200'});
      //res.redirect('/');
    }
  });
};

exports.delete = function(req, res, route) {
  req.session.destroy();
  res.redirect(route);
};