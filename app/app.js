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
		.otherwise({
			redirectTo: '/'
		});

});