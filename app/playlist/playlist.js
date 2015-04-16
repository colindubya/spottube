/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){
	angular.module('app').controller('playlistController', playlistController);

	playlistController.$inject = ['spotify', 'youtube', '$routeParams'];
	function playlistController(spotify, youtube, $routeParams){
		var vm = this;
		vm.title = 'playlist';
        var playlistId = $routeParams.playlistId;
        var ownerId = $routeParams.ownerId;

		spotify.getPlaylist(ownerId, playlistId).then(function(data){
				vm.playlist = data;

				angular.forEach(vm.playlist.tracks.items, function(item){
					youtube.getVideo(item.track.name).then(function(youtube){
						item.video = youtube;
					});
				});

			});

	}

})();