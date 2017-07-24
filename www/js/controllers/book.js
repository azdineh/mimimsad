angular.module('azdineh.apps.controllers')
    .controller('BookCtrl', function ($scope, $rootScope, MmsYT, $sce, $timeout) {


        $scope.currentBook = "black and red";
        $scope.video_id = "Hmyl4gsfx5s";
        MmsYT.init();
        $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.video_id + "?enablejsapi=1");

        $scope.play = function () {
            MmsYT.play();
        }
        $scope.pause = function () {
            MmsYT.pause();
        }

        var tmp = function () {
            $timeout(function () {
               $scope.play();
            }, 1500);
        }
        $scope.$on('$ionicView.enter', function (e) {
            tmp();
        });

    })