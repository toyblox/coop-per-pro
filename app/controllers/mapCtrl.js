var app = angular.module('coop');

app.controller('mapCtrl', function($scope, $routeParams, mainService){

$scope.map = { center: { latitude: 40.75, longitude: -111.88 }, zoom: 11 };


$scope.markers = [];



	$scope.getLocations = function() {
		mainService.getCoops().then(function(data) {
			console.log(data.data);
			var coopsArray = data.data;
			for(var i = 0; i < coopsArray.length; i++){
				$scope.markers.push({
					id: i,
					latitude: coopsArray[i].location.lat,
					longitude: coopsArray[i].location.lng	
				});
			};
			console.log('markers!', $scope.markers);
		})
	};

$scope.getLocations();


	

// 	$scope.createMarker = function(location) {
// 		for(var i = 0; i < location.length; i++) {
// 		$scope.markers.push({
// 			id: i,
// 			latitude: location[i].latitude,
// 			longitude: location[i].longitude
// 			});
// 		};
// 		console.log($scope.markers);
// 	};

// $scope.createMarker($scope.location);	

// $scope.location = [
	// 	{
	// 		latitude: 40.7776,
	// 		longitude: -111.891741
	// 	},
	// 	{
	// 		latitude: 40.753267,
	// 		longitude: -111.855261
	// 	},
	// 	{
	// 		latitude: 40.794223,
	// 		longitude: -111.929828
	// 	}
	// ];


})