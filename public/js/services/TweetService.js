// public/js/services/tweetService.js
angular.module('TweetService', []).factory('Tweet', ['$http', function($http) {

    return {
        
        // call to get all tweets
        get : function(candidate) {
            return $http.get('/api/tweet', {params:{"candidate": candidate}});
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new tweet
        create : function(tweetData) {
            return $http.post('/api/tweets', tweetData);
        },

        // call to DELETE a tweet
        delete : function(id) {
            return $http.delete('/api/tweets/' + id);
        }
    }       

}]);