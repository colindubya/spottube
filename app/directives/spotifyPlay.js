/**
 * Created by colin on 4/16/15.
 */
(function(){

    angular.module('app').directive('cwSpotifyPlay', cwSpotifyPlay);

    cwSpotifyPlay.$inject = ['$sce'];
    function cwSpotifyPlay($sce){
        return {
            restrict:'E',
            templateUrl:'./app/directives/templates/spotifyPlay.html',
            scope:{
                song:'='
            },
            link:function(scope){
                scope.url = $sce.trustAsResourceUrl('https://embed.spotify.com/?uri=' + scope.song.uri);
            }
        };
    }

})();