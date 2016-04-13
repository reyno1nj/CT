// app/routes.js

// get tweet model
var Tweet = require('./models/tweet');
	
	module.exports = function(app){
		//server routes

		// api route
		app.get('/api/tweet', function(req, res){
			Tweet.find({candidateAbout:req.query.candidate}, function(err, tweets){
				console.log(req.query);
				//if there's an err, return
				if(err)
					res.send(err);
				res.json(tweets);
				console.log(tweets.length);
			});
		});

		//frontend routes
		app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
	};