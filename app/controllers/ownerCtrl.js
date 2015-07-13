var app = angular.module('coop');

app.controller('ownerCtrl', function($scope, $routeParams, mainService, $location){

mainService.getCoops(); 

$scope.addCoop = function(newCoop){
	mainService.addCoops(newCoop);
	$location.path('/map');
};

	
});