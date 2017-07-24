var player;
var playerReady=false;
function onYouTubeIframeAPIReady() {
  console.log('YT API is ready..')
  player = new YT.Player('mms-player', {
    playerVars: { 'autoplay': 0, 'controls': 0 },
    height: '360',
    width: '640',
    /* videoId: 'M7lc1UVf-VE',*/
    events: {
      'onReady': function (event) {
        console.log("Player is ready..");
        console.log(player);
        playerReady = true;
        event.target.setVolume(100);
      }
      /*',onStateChange': onPlayerStateChange*/
    }
  });
}

angular.module('azdineh.apps.services')
  .factory('MmsYT', function () {
    var MmsYT = function () {
      var vm = {};
      vm.init = function () {
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      };


      vm.play = function () {
        if (playerReady) player.playVideo();
        else setTimeout(function () { player.playVideo() }, 1000);
      }

      vm.pause = function () {
        player.pauseVideo();
      }

      vm.stop = function () {
        player.stopVideo();
      }

      return vm;
    }

    return MmsYT();
  })