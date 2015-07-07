var app = angular.module('coop');

app.controller('mapCtrl', function($scope, $routeParams){

	$scope.map = { center: { latitude: 40.75, longitude: -111.88 }, zoom: 11 };

	$scope.location = [
		{
			latitude: 40.7776,
			longitude: -111.891741
		},
		{
			latitude: 40.753267,
			longitude: -111.855261
		},
		{
			latitude: 40.794223,
			longitude: -111.929828
		}
	];




	$scope.markers = [];

	$scope.createMarker = function(location) {
		for(var i = 0; i < location.length; i++) {
		$scope.markers.push({
			id: i,
			latitude: location[i].latitude,
			longitude: location[i].longitude
			});
		};
		console.log($scope.markers);
	};

$scope.createMarker($scope.location);	

})