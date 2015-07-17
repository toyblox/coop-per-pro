var app = angular.module('coop');

app.controller('coopCtrl', function($scope, $routeParams, mainService, $location){


	$scope.addCoop = function(newCoop){
		var geocoder = new google.maps.Geocoder();
		var address = newCoop.address;
		geocoder.geocode( { "address" : address }, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) {
				console.log(results);
				newCoop.location = {
					lat:results[0].geometry.location.A,
					lng:results[0].geometry.location.F
				};
				mainService.addCoops(newCoop);
					
			} else {
				console.log('geocode unsuccessful', status);
			}
		});
		// $location.path('/signup');
	};





// $scope.pop = function() {
// 	toaster.pop('success', '')
// };

	
});