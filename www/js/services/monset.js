angular.module('azdineh.apps.services')
    .factory('Monset', function ($cordovaNetwork, $state) {

        var Monset = function () {
            var vm = {};
            vm.options = {
                language: 'ar-MA',
                matches: 3
            }

            vm.startListening = function (cmd) {
                /*                window.plugins.speechRecognition.startListening(
                                    function(arr){
                                        console.log('Start listening..')
                                        arr.forEach(function(item) {
                                            console.log(item);
                                        }, this);
                                    }
                                    , function(){
                                        console.log('Error while listening..')
                                    }, vm.options)*/
                switch (cmd) {
                    case 'time':
                        $state.go('tab.main-menu-time');
                        break;
                    case 'book':
                        $state.go('tab.main-menu-book');
                        break;
                    default:
                        break;
                }

            }


            return vm;
        }
        return Monset();

    })