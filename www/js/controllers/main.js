angular.module('azdineh.apps.controllers')
    .controller('MainCtrl', function ($scope, $rootScope, $http, Mimimsad,Monset) {

        ionic.Platform.ready(function () {
            //$rootScope.isOnline
            ionic.Platform.fullScreen();
            $scope.commands = [];
            $rootScope.micStyle = "mms-text-second";
            $rootScope.frobotspeakStyle = "";

            // listen for Online event
            /*            $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                            $rootScope.isOnline = true;
                            Mimimsad.speak('connected', function () { }, function () { }, true);
                        })
                        // listen for Offline event
                        $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                            $rootScope.isOnline = false;
                            Mimimsad.speak('loss_internet_will_try', function () { }, function () { });
                        })*/

            $rootScope.startListening = function () {
                console.log("Mimimsad : Start listening..");
                //$rootScope.mic-style="mms-text-second";
                $rootScope.micStyle = "mms-positive";
                Monset.startListening('book');
            };

            window.plugins.insomnia.keepAwake(function () {
                console.log("keep awake is on");
            }, function () {
                console.log("Error with Insomnia");
            });

            var tmp = function () {
                console.log("Main page entred..");
                /**/

                Mimimsad.speak('we_in_main_page', function () { }, function () {
                    Mimimsad.speak('marhban', function () { }, function () {
                        Mimimsad.speak('for_go_main_menu', function () { }, function () {
                            Mimimsad.speak('touch_screen_twice', function () { }, function () {
                                Mimimsad.speak('cmd_go_main_menu', function () { }, function () {
                                }, true);

                            }, true);
                        }, true);
                    }, true);
                }, true);
            }
            $scope.$on('$ionicView.enter', function (e) {
                tmp();
            });

            tmp();


        });//end ready function



    });
