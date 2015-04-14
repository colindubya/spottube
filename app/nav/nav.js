/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){

	angular.module('app')
		.controller('navController', navController);

	navController.$inject = ['spotify', 'user', '$scope'];
	function navController(spotify, user, $scope){
		var vm = this;
		vm.title = 'side nav';

		$scope.$on('login', function(){
			spotify.getPlaylists().then(function(data){
				vm.playlists = data.items;
			});
		});

	}

})();