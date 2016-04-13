// app/models/tweet.js
// grab the mongoose module
var mongoose = require('mongoose');

//define the module
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Tweet', {
	text : {type: String, default:''},
	favCount: {type: Number, default:0},
	rtCount: {type: Number, default:0},
	createdAt: {type: String, default:''},
	candidateAbout:{type: String, default:''}
});