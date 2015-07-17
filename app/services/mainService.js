angular.module('coop').service('mainService', function($http, $q){

	// var UserID = $http.get('/api/user').then(function(user){
	// 	return UserID;
	// });

	this.getCoops = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/coops'
		}).then(function(data) {
			dfd.resolve(data);
		})
		return dfd.promise;
	};


	this.addCoops = function(newCoop) {
		console.log("hello", newCoop);
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/coops',
			data: newCoop
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};

	this.getUsers = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/users'
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};

	this.addUsers = function(newUser) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users/',
			data: newUser
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};

	this.getOwners = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/owners'
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};

	this.addOwners = function(newOwner) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/owners',
			data: newOwner
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};


})