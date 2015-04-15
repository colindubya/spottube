/**
 * Created by Colin.Watson on 4/13/2015.
 */

(function(){

	angular.module('app').factory('youtube', youtube);

	youtube.$inject = ['$http'];
	function youtube($http){

		var service = {
			getVideo:getVideo
		};

		return service;


		function getVideo(name){
			$http.defaults.headers.common.Authorization = undefined;
			return $http.get('https://content.googleapis.com/youtube/v3/search?safeSearch=strict&part=snippet&q=' + name + '&key=AIzaSyAjfOZ77iVJbiIhcegRuFDNkug-sNA3izo').then(function(response){
				var video = {};
				angular.forEach(response.data.items, function(item){
					if (item.snippet.channelTitle.toLowerCase().indexOf('vevo') > 0){
						video.id = item.id.videoId;
						video.title = item.snippet.title;
						video.thumbnail = item.snippet.thumbnails.default.url;
					}
				});

				return video;
			});
		}
	}
})();