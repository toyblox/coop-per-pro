var app = angular.module('coop');

app.controller('mapCtrl', function($scope, $routeParams, mainService){

	var styles = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f7f1df"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d0e3b4"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbd3da"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bde6ab"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffe15f"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#efd151"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "black"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cfb2db"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a2daf2"
            }
        ]
    }
]


		

$scope.map = { center: { latitude: 40.75, longitude: -111.88 }, zoom: 11, styles: styles};


$scope.markers = [];



$scope.getLocations = function() {
	mainService.getCoops().then(function(data) {
		console.log(data.data);
		var coopsArray = data.data;
		for(var i = 0; i < coopsArray.length; i++){
			$scope.markers.push({
				id: i,
				latitude: coopsArray[i].location.lat,
				longitude: coopsArray[i].location.lng,
				icon: "../app/images/chicken2.png"
			});
		};
		console.log('markers!', $scope.markers);
	})
};

$scope.getLocations();

$scope.getUser = function() {
	mainService.getUsers().then(function(data) {
		console.log('user!', data.data);
		var userData = data.data;
		$scope.showUser = userData[userData.length - 1];
		$scope.showUsers = userData;
	});
}; 

$scope.getUser();

$scope.list = [];

$scope.listAddress = function() {
	mainService.getCoops().then(function(data) {
		var coopData = data.data;
		for(var i = 0; i < coopData.length; i++) {
			$scope.list.push({
				name: coopData[i].name,
				address: coopData[i].address,
				status: coopData[i].status,
				chickens: coopData[i].chickens,
				feed: coopData[i].feed_type
			});
		};
		console.log('listed!', $scope.list);
	})
};

$scope.listAddress();

$scope.windowOptions = {
	show: false
   };

$scope.onClick = function() {
	$scope.windowOptions.show = !$scope.windowOptions.show;
	console.log('clicked!');
   };

$scope.closeClick = function() {
	$scope.windowOptions.show = false;
   };






	

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