/**
 * Created by Colin.Watson on 4/13/2015.
 */


(function () {

	angular.module('app').factory('spotify', spotify);

	spotify.$inject = ['$http', '$window', '$location'];
	function spotify($http, $window, $location) {
		var service = {
			getPlaylists: getPlaylists,
			getPlaylist: getPlaylist,
			getSong:getSong,
			login:login,
            logout:logout,
            setToken:setToken,
			user:{}
		};

        if ($window.localStorage.getItem('spotify')){
            service.user = JSON.parse($window.localStorage.getItem('spotify'));
        }

		return service;

        function login(){
            return $http.get('https://api.spotify.com/v1/me').then(function (response) {
                service.user.id = response.data.id;
                service.user.name = response.data.display_name;
                $window.localStorage.setItem('spotify', JSON.stringify(service.user));

            });
        }

        function logout(){
                $window.localStorage.removeItem('authToken');
                $window.localStorage.removeItem('spotify');
                service.user = {};
                $location.path('');
        }

        function setToken(token){
            $window.localStorage.setItem('authToken', token);
        }

        function getSong(name) {
            return $http.get('spotify' + name).then(function (response) {
                return response.data;
            });
		}

		function getPlaylists() {
            return $http.get('https://api.spotify.com/v1/users/' + service.user.id + '/playlists').then(function (response) {
                return response.data.items;
            });
		}

		function getPlaylist(ownerId, playlistId) {
            return $http.get('https://api.spotify.com/v1/users/' + ownerId + '/playlists/' + playlistId).then(function (response) {
                return response.data;
            });
		}
	}
})();
