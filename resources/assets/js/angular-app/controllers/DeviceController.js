'use_strict';

/*
 main.controller('DeviceController', ['$scope', function($scope) {
 $scope.example = 'Hello World!';
 }]);
 */

angular.module('device.controller', [
    'ui.router',
])
.controller('DeviceController', [
    '$scope', '$location', '$state', '$window', 'devices',
    function ($scope, $location, $state, $window, devices) {
        console.debug(devices);
    }
]);