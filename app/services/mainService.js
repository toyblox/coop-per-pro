angular.module('coop').service('mainService', function($http, $q){

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
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/coops',
			data: newCoop = {

			}
		}).then(function(data) {
			dfd.resolve(data);
		})

		return dfd.promise;
	};

	
})