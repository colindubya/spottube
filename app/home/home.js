/**
 * Created by Colin.Watson on 4/13/2015.
 */
(function(){

    angular.module('app').controller('homeController', homeController);

    homeController.$inject = ['spotify'];
    function homeController(spotify){
        var vm = this;
        vm.user = spotify.user;
        vm.playlists = [];
        vm.logout = spotify.logout;

        spotify.getPlaylists().then(function(data){
           vm.playlists = data;
        });

    }

})();