// app/routes.js

// get tweet model
var Tweet = require('./models/tweet');
	
	module.exports = function(app){
		//server routes

		// api route
		app.get('/api/tweets', function(req, res){
			Tweet.find(function(err, tweets){
				//if there's an err, return
				if(err)
					res.send(err);
				res.json(tweets);
			});
		});

		//frontend routes
		app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
	};