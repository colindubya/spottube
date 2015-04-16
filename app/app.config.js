(function(){

	var app = angular.module('app');

	app.config(config);
	config.$inject = ['$routeProvider', '$httpProvider'];
	function config($routeProvider, $httpProvider) {
		$routeProvider
            .when('/home', {
                templateUrl: './app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/playlist/:ownerId/:playlistId', {
                templateUrl: './app/playlist/playlist.html',
                controller: 'playlistController',
                controllerAs: 'vm'
		    })
            .when('/', {
                templateUrl: './app/login/login.html',
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .when('/:access_token', {
                templateUrl: './app/login/login.html',
                controller: 'loginController',
                controllerAs: 'vm'
            }).otherwise('/');

        spotifyInterceptor.$inject = ['$window', '$injector'];
        function spotifyInterceptor($window, $injector){
            return {
                'request': function(config) {
                    if(config.url.indexOf('api.spotify') > -1){
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('authToken');
                    }
                    return config;
                },

                'responseError': function(response) {
                    if (response.status == '401' && response.config.url.indexOf('api.spotify') > -1) {
                        var spotify = $injector.get('spotify');
                        spotify.logout();
                    }

                    return response;
                }
            };
        }

        $httpProvider.interceptors.push(spotifyInterceptor)

	}


})();