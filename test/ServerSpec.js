var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../server-config.js');

var db = require('../lib/dbConfig');
var User = require('../models/users');
var BuddyRequest = require('../models/buddyRequest');

var ejs = require('ejs');
var fs = require('fs');

describe('', function() {

  beforeEach(function(done) {
    // logout
    // remove users
    User.remove({username: 'testUser'}).exec();
    User.remove({username: 'Bob'}).exec();
    User.remove({username: 'Shaniqua'}).exec();
    // remove buddyRequests
    BuddyRequest.remove({user: 'testUser'}).exec();
    BuddyRequest.remove({user: 'Bob'}).exec();
    BuddyRequest.remove({user: 'Shaniqua'}).exec();

    done();
  });

  describe('Login endpoint', function() {

    beforeEach(function(done) {
      // login
      // add users
      User.create({
        username: 'testUser',
        password: 'testPassword'
      });
      User.create({
        username: 'Bob',
        password:'password'
      });
      User.create({
        username: 'Shaniqua',
        password: '12345'
      });

      done();
    });

    //1.getIndex should return the index route
    it('GET "/" should redirect to "/login"', function(done) {
      request(app)
        .get('/')
        .expect(302)
        .expect(function(res) {
          expect(res.headers.location).to.equal('/login');
        })
        .end(done);
    });

    //3. get /login should render the login page
    it('get "/login" should render the login page', function(done) {
      request(app)
        .get('/login')
        .expect(200)
        .expect(function(res) {
          console.log('\n');
          var templateString = fs.readFileSync(app.mainProjectDirectory + '/views/login.ejs', 'utf-8');
          //console.log(res.text, templateString);
          expect(res.text).to.equal(templateString);
        })
        .end(done);
    });

    //11. post /login should only allow login if user exists, and password matches
    it('post "/login" should only allow login if user exists, and password matches', function(done) {
      request(app)
        .post('/login')
        .send({
          'username': 'testUser',
          'password': 'testPassword'
        })
        .expect(302)
        .expect(function(res) {
          expect(res.headers.location).to.equal('/');
        })
        .end(done);
    });

    //12. post /login should generate a new session if one doesnt already exist
    xit('post /login should generate a new session if one doesnt already exist', function(done) {

    });
    /*
    13. get /login should check for an existing session that has a
    authentication indicator
    */

  });

  describe('Signup endpoint', function() {

    //4. get /signup should render the signup page
    it('get "/signup" should render the signup page', function(done) {
      request(app)
      .get('/signup')
      .expect(200)
      .expect(function(res) {
        var templateString = fs.readFileSync(app.mainProjectDirectory + '/views/signup.ejs', 'utf-8');
        //console.log(res.text, templateString);
        expect(res.text).to.equal(templateString);
      })
      .end(done);
    });
    /*
    5. post /signup should not work if the username already exists

    6. post /signup should be case insensitive to previously created users

    7. post /signup should error if password is blank

    8. post /signup should only function if password strength requirements are met
    */
  });

  describe('Logout endpoint', function() {

    beforeEach(function(done) {
      // login
      // add users
      User.create({username: 'testUser'});
      User.create({username: 'Bob'});
      User.create({username: 'Shaniqua'});

      done();
    });

    //*9. get /logout should redidrect to login
    it('get "/logout" should redidrect to login', function(done) {
      request(app)
      .get('/logout')
      .expect(302)
      .expect(function(res) {
        expect(res.headers.location).to.equal('/login');
      })
      .end(done);
    });
    //10. get /logout should destroy the current session, and generate a new one
    xit('get "/logout" should destroy the current session, and generate a new one', function(done) {

    });

  });

  describe('BuddyRequest endpoint', function() {
    /*
     14. get /buddyrequest should return expected entries based on username

     15. get /buddyrequest should return expected entries for an age range search

     16. get /buddyrequest should handle partial matches on verb & noun searches

     17. post /buddyrequest should return status code 201

     18. post /buddyrequest should add an item to the database

     19. previously posted items to /buddyrequest should show up in successive
     get requests to /buddyrequest
     */
  });

  describe('Profile endpoint', function() {
    //2. getProfile should return the user
    //profile @ the requested username
  });

  describe('Miscellaneous tests', function() {
    //20. invalid urls should return status code 404
  });
});
