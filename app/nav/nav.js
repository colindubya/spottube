/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){

	angular.module('app')
		.controller('navController', navController);

	navController.$inject = ['spotify'];
	function navController(spotify){
		var vm = this;
		vm.title = 'side nav';
        vm.playlists = [];
        vm.logout = spotify.logout;

        if (spotify.user.id) {
            spotify.getPlaylists().then(function (data) {
                vm.playlists = data;
            });
        }

	}

})();