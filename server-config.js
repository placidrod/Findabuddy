require('dotenv').config();
var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


//initialization for mongodb collection to store session information
var store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'userSessions'
});
//A default session time out
var week = 1000 * 60 * 60 * 24 * 7;

//Catch errors for the MongoDBStore
// store.on('error', function(error) {
//   assert.ifError(error);
//   assert.ok(false);
//   console.log('MongodDBStore Error:', error);
// });

var handler = require('./lib/request-handler');

app.mainProjectDirectory = __dirname;

//view rendering and middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//initializaiton for session middleware
app.use(session({
  secret: 'Hey listen!',
  cookie: {
    maxAge: week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

app.use(function(req, res, next){
  req.io = io;
  next();
});

//routes for application
app.get('/', handler.getIndex);
app.get('/test', handler.getTest);
app.get('/profile', handler.getProfile);
app.post('/profile', handler.postProfile);
app.get('/user', handler.getUser);
app.get('/users', handler.getAllUsers);

app.get('/friends', handler.getFriends);
app.post('/friends', handler.addFriend);

app.get('/interests', handler.getInterests);
app.post('/interests', handler.addInterest);

app.get('/login', handler.getLogin);
app.post('/login', handler.postLogin);
app.get('/logout', handler.getLogout);

app.get('/signup', handler.getSignup);
app.post('/signup', handler.postSignup);

app.get('/buddyRequest', handler.getBuddyRequest);
app.get('/buddyRequest/:_id', handler.getSingleBuddyRequest);
app.post('/buddyRequest', handler.postBuddyRequest);

app.get('/message', handler.getMessages);
app.get('/message/:recipient', handler.getMessagesByRecipient);
app.post('/message', handler.postMessage);
app.put('/message/recipient', handler.putMessageByRecipient);

// app.get('/rating', handler.getRating);
app.get('/rating/:request_id', handler.getRequestRatings);
app.post('/rating', handler.postRating);
app.put('/rating/:_id', handler.updateRating);

app.get('/*', handler.get404);


io.sockets.on('connection', function (socket) {
  socket.on('user', function (username) {
    console.log('user joined', username);
    socket.join(username); // We are using room of socket io
  });
});

module.exports = server;
