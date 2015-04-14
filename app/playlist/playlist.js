/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){
	angular.module('app').controller('playlistController', playlistController);

	playlistController.$inject = ['user', 'spotify', 'youtube', '$routeParams'];
	function playlistController(user, spotify, youtube, $routeParams){
		var vm = this;
		vm.title = 'playlist';
		vm.playlistId = $routeParams.playlistId;

		if (user.getUserId() > 0){
			spotify.getPlaylist(vm.playlistId).then(function(data){
				vm.playlist = data;

				angular.forEach(vm.playlist.tracks.items, function(item){
					youtube.getVideo(item.track.name).then(function(youtube){
						item.video = youtube;
					});
				});

			});
		}
	}

})();