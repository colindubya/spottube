/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){
	angular.module('app').factory('user', user);

	user.$inject = ['$cookies', '$http'];
	function user($cookies, $http){
		var name = '';

		var service = {
			getUserId:getUserId,
			name:name,
			setToken: setToken,
			getUserInfo: getUserInfo
		};

		return service;


		function getUserId(){
			if ($cookies.get('spotifyId')){
				return $cookies.get('spotifyId');
			}
			else return -1;
		}

		function getUserInfo(){
			if ($cookies.get('authToken')) {
				$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('authToken');
				return $http.get('https://api.spotify.com/v1/me').then(function (response) {
					$cookies.put('spotifyId', response.data.id);
					service.name = response.data.display_name;
				});
			}
			else{
				var callback = encodeURIComponent('http://localhost:7203/');
				window.location = 'https://accounts.spotify.com/en/authorize?client_id=cf218c95b88e409fbdd30b815632bd14&response_type=token&redirect_uri=' + callback + '&scope=user-read-private%20playlist-read-private';
				return false;
			}
		}

		function setToken(token){
			$cookies.put('authToken', token);
		}

		function checkToken(){
			var code = $cookies.get('authtoken');
			if (code){
				var req = {
					grant_type: 'authorization_code',
					code: code,
					redirect_uri: 'http://localhost:7203/#/callback'
				};
				$http.defaults.headers.common.Authorization = 'Basic Y2YyMThjOTViODhlNDA5ZmJkZDMwYjgxNTYzMmJkMTQ6NTZjY2IwNTk4NDE1NDk0ZDk2ZGRiMGI0N2VmMjAzMzk=';
				$http.defaults.headers.common['Content-Type'] = 'x-www-form-urlencoded';

				return $http.post('https://accounts.spotify.com/api/token', req).then(function(response){
					console.log(response);
				}, function(error){
					console.log(error);
				});
				//$http({
				//	url:'https://accounts.spotify.com/api/token',
				//	method:'POST',
				//	headers:{
				//		'Content-Type' : 'x-www-form-urlencoded',
				//		'Authorization' : 'Basic Y2YyMThjOTViODhlNDA5ZmJkZDMwYjgxNTYzMmJkMTQ6NTZjY2IwNTk4NDE1NDk0ZDk2ZGRiMGI0N2VmMjAzMzk='
				//	},
				//	data: {
				//		grant_type:'authorization_code',
				//		code: code,
				//		redirect_uri:'http://localhost:7203/#/callback'
				//	}
				//}).success(function(response){
				//	console.log(response);
				//}).error(function(error){
				//	console.log(error);
				//});
			}

			$cookies.remove('authCode');
		}
	}

})();