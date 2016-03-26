// public/js/MainCtrl.js

angular.module('TweetCtrl', []).controller('TweetController', function($scope, Tweet) {

    //$scope.tagline = Tweet.get();
    $scope.tweets = null;
    Tweet.get().then(function(response){
    	$scope.tweets = response.data;
    })
    //$scope.tagline = "something"
});