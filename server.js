// server.js

//get the required modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Twitter = require('twitter');

//configuration
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongodb
mongoose.connect('mongodb://heroku_0r7g6dv5:rafnu69jer41cdbjdv8di39drm@ds023570.mlab.com:23570/heroku_0r7g6dv5');

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app; 

var TweetModel = require('./app/models/tweet');

var client = new Twitter({
  consumer_key: 'wE9ShFch9jvpKUVj4lWjGC4lz',
  consumer_secret: '8hZDSQnTA0vikfPXVJnUflpm34iCNLFk055wvTpSUQ8tXOYjDR',
  access_token_key: '712102656307757056-CZmHQ0w4Jwwq0dX4GfIHycXU2GDEp59',
  access_token_secret: 'uJPSKjHIlCbCU03Vl1yDqJnMWgDRkwO7iigKLJV2MYQnU'
});
var candidate = 'Trump'
client.stream('statuses/filter', {track: candidate}, function(stream) {
  stream.on('data', function(tweet) {
    //console.log(tweet.text);
    var newTweet = new TweetModel({
      text: tweet.text,
      favCount: tweet.favorite_count,
      rtCount: tweet.retweet_count,
      createdAt: tweet.created_at,
      candidateAbout: candidate
    });
    newTweet.save(function(err){
      if (err) throw err;

      console.log('Tweet created');
    });
  });
 
  stream.on('error', function(error) {
    console.log("error");
    throw error;
  });
});