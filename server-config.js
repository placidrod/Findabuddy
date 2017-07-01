var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var app = express();

var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/connect-mongodb-session_findabuddy',
  collection: 'userSessions'
});
//A default session time out
var week = 1000 * 60 * 60 * 24 * 7;

//Catch errors for the MongoDBStore
store.on('error', function(error) {
  assert.ifError(error);
  assert.ok(false);
  console.log('MongodDBStore Error:', error);
});

var handler = require('./lib/request-handler');

app.mainProjectDirectory = __dirname;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'Hey listen!',
  cookie: {
    maxAge: week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

app.get('/', handler.getIndex);
app.get('/test', handler.getTest);
app.get('/profile', handler.getProfile);
app.get('/user', handler.getUser);

app.get('/login', handler.getLogin);
app.post('/login', handler.postLogin);
app.get('/logout', handler.getLogout);

app.get('/signup', handler.getSignup);
app.post('/signup', handler.postSignup);

app.get('/buddyRequest', handler.getBuddyRequest);
app.get('/buddyRequest/:_id', handler.getSingleBuddyRequest);
app.post('/buddyRequest', handler.postBuddyRequest);

app.get('/message', handler.getMessages);
app.get('/message/recipient', handler.getMessagesByRecipient);
app.post('/message', handler.postMessage);
app.put('/message/recipient', handler.putMessageByRecipient);

// app.get('/rating', handler.getRating);
app.get('/rating/:request_id', handler.getRequestRatings);
app.post('/rating', handler.postRating);
app.put('/rating/:_id', handler.updateRating);

app.get('/*', handler.get404);

module.exports = app;