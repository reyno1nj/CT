// public/js/TweetCtrl.js

angular.module('ClintonCtrl', []).controller('ClintonController', function($scope, Tweet) {

    //use TweetService Tweet to get DB data for display
    $scope.tweets = null;
    Tweet.get("Clinton").then(function(response){
    	$scope.tweets = response.data;
    })
    //$scope.tagline = "something"
});