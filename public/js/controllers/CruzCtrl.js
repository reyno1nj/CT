// public/js/TweetCtrl.js

angular.module('CruzCtrl', []).controller('CruzController', function($scope, Tweet) {

    //use TweetService Tweet to get DB data for display
    $scope.tweets = null;
    Tweet.get("Cruz").then(function(response){
    	$scope.tweets = response.data;
    })
    //$scope.tagline = "something"
});