angular.module('azdineh.apps.controllers')
    .controller('TimeCtrl', function ($scope, $rootScope, Mimimsad, $state,$timeout) {
        $scope.time = moment().format('LLLL');
        Mimimsad.speak($scope.time, function () { }, function () {
            $timeout(function () {
                $state.go('tab.main-menu');
            }, 5000);
        }, false);
    })