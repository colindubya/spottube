/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){

	angular.module('app').controller('loginController', loginController);

    loginController.$inject = ['$location', 'spotify'];
	function loginController($location, spotify){
		var vm = this;
		vm.login = login;

		if ($location.absUrl().indexOf('/access_token') > -1){
			window.location = $location.absUrl().replace('access_token', '?access_token');;
		}

		if ($location.search().access_token){
			spotify.setToken($location.search().access_token);
			spotify.login().then(function(){
                $location.url('/home');
            });
		}

		function login() {
            window.location = 'https://accounts.spotify.com/en/authorize?client_id=cf218c95b88e409fbdd30b815632bd14&response_type=token&redirect_uri=http://colindubya.github.io/spottube/#/&scope=user-read-private%20playlist-read-private';
        }
	}

})();