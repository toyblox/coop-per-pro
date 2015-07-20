var app = angular.module('coop', ['ngRoute','uiGmapgoogle-maps']);

	app.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app/templates/main.html',
			controller: 'mainCtrl'
		})
		.when('/map', {
			templateUrl: 'app/templates/map.html',
			controller: 'mapCtrl'
		})
		.when('/coop', {
			templateUrl: 'app/templates/coop.html',
			controller: 'coopCtrl'
		})
		.when('/owner', {
			templateUrl: 'app/templates/owner.html',
			controller: 'ownerCtrl'
		})
		.when('/user', {
			templateUrl: 'app/templates/user.html',
			controller: 'userCtrl'
		})
		.when('/signup-owner', {
			templateUrl: 'app/templates/signup.html',
			controller: 'signupCtrl'
		})
		.when('/signup-user', {
			templateUrl: 'app/templates/signup-user.html',
			controller: 'signupUser'
		})
		.otherwise({
			redirectTo: '/'
		});

});