// public/js/TweetCtrl.js

angular.module('TweetCtrl', []).controller('TweetController', function($scope, Tweet) {

    //use TweetService Tweet to get DB data for display
    $scope.tweets = null;
    Tweet.get().then(function(response){
    	$scope.tweets = response.data;
    })
    //$scope.tagline = "something"
});