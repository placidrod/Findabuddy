exports.error = function(err) {
  console.error(err);
  res.status(500);
  res.send();
};

exports.regenerate = function(req, res, user) {
  req.session.regenerate(function(err) {
    if (err) {
      exports.error(err)
    } else {
      console.log('session regeneration successful');
      req.session.user = user;
      delete req.session.user.password;
      res.redirect('/');
    }
  });
};

exports.delete = function(req, res, route) {
  req.session.destroy();
  res.redirect(route);
};