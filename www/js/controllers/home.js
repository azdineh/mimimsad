angular.module('azdineh.apps.controllers', [])
.controller('HomeCtrl', function($scope,Mimsad) {
    $scope.textforspeak="في هذا التطبيق نقدم كتبا صوتية..";
    $scope.speak=function(){
        Mimsad.speak($scope.textforspeak,
        function()
        {alert("Start speaking..")},
        function(){
            alert("End speaking..");
        });
    }   
});