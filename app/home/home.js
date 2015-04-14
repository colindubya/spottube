/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){

	angular.module('app').controller('homeController', homeController);

	homeController.$inject = ['$location', 'user', '$rootScope'];
	function homeController($location, user, $rootScope){
		var vm = this;
		vm.login = login;
		vm.user = user;
		if ($location.absUrl().indexOf('/access_token') > 0){
			var url = $location.absUrl().replace('access_token', '?access_token');
			window.location = url;
		}

		if ($location.search().access_token){
			user.setToken($location.search().access_token);
			vm.login();
		}

		function login() {
			user.getUserInfo().then(function () {
				$rootScope.$broadcast('login');
			});
		}
	}

})();


function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}