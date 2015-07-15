var app = angular.module('coop');

app.controller('coopCtrl', function($scope, $routeParams, mainService, $location){

mainService.getCoops(); 

$scope.addCoop = function(newCoop){
	mainService.addCoops(newCoop);
	// $location.path('/map');
};



// $scope.pop = function() {
// 	toaster.pop('success', '')
// };

	
});