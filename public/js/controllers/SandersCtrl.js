// public/js/TweetCtrl.js

angular.module('SandersCtrl', []).controller('SandersController', function($scope, Tweet) {

    //use TweetService Tweet to get DB data for display
    $scope.tweets = null;
    Tweet.get("Sanders").then(function(response){
    	$scope.tweets = response.data;
    })
    //$scope.tagline = "something"
});