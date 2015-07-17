var app = angular.module('coop');

app.controller('signupCtrl', function($scope, $routeParams, mainService, $location) {
	

	$scope.addUser = function(newUser) {
		console.log('work');
		mainService.addUsers(newUser);
	};

});