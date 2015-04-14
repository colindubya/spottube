/**
 * Created by Colin.Watson on 4/13/2015.
 */


(function () {

	angular.module('app').factory('spotify', spotify);

	spotify.$inject = ['$http', 'user', '$cookies', '$location', 'spotifykey'];
	function spotify($http, user, $cookies, $location, spotifykey) {

		var service = {
			getPlaylists: getPlaylists,
			getPlaylist: getPlaylist,
			getSong:getSong
		};

		return service;


		function getSong(name) {
			if (checkIfAuthorized()) {
				$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('authToken');
				return $http.get('spotify' + name).then(function (response) {
					return response.data;
				});
			}
		}

		function getPlaylists() {
			if (checkIfAuthorized()) {
				$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('authToken');
				return $http.get('https://api.spotify.com/v1/users/' + user.getUserId() + '/playlists').then(function (response) {
					return response.data;
				});
			}
		}

		function getPlaylist(id) {
			if(checkIfAuthorized()) {
				$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('authToken');
				return $http.get('https://api.spotify.com/v1/users/' + user.getUserId() + '/playlists/' + id).then(function (response) {
					console.log(response.data);
					return response.data;
				}, function(error){
					return $http.get('https://api.spotify.com/v1/users/spotify/playlists/' + id).then(function (response) {
						console.log(response.data);
						return response.data;
					});
				});
			}
		}

		function checkIfAuthorized(){
			if ($cookies.get('authToken')){
				return true;
			}
			var callback = encodeURIComponent('http://localhost:7203/#/');
			window.location ='https://accounts.spotify.com/en/authorize?client_id=cf218c95b88e409fbdd30b815632bd14&response_type=token&redirect_uri=' + callback + '&scope=user-read-private%20playlist-read-private';
			return false;
		}
	}
})();
