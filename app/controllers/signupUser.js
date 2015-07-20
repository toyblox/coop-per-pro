var app = angular.module('coop');

app.controller('signupUser', function($scope, $routeParams, mainService, $location) {
	

	$scope.addUser = function(newUser) {
		console.log('work');
		mainService.addUsers(newUser).then(function() {
			$location.path('/map');
		});
	
	};

});