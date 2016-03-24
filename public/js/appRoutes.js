// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // tweets page that will use the TweetController
        .when('/tweets', {
            templateUrl: 'views/tweet.html',
            controller: 'TweetController'
        });

    $locationProvider.html5Mode(true);

}]);