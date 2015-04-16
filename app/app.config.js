(function(){

	var app = angular.module('app');
	app.value('spotifykey', 'cf218c95b88e409fbdd30b815632bd14');

	app.config(config);
	config.$inject = ['$routeProvider', '$sceDelegateProvider'];
	function config($routeProvider, $sceDelegateProvider) {
		$routeProvider.when('/', {
			templateUrl: './app/home/home.html',
			controller: 'homeController',
			controllerAs: 'vm'
			}).when('/:access_token', {
				templateUrl: './app/home/home.html',
				controller: 'homeController',
				controllerAs: 'vm'
			}).when('/playlist/:playlistId', {
			templateUrl: './app/playlist/playlist.html',
			controller: 'playlistController',
			controllerAs: 'vm'
		});

		$sceDelegateProvider.resourceUrlWhitelist(['*spotify*']);
	}


})();