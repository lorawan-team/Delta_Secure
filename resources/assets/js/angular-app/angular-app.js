'use_strict';
var main = angular.module('app', [
    'routes',
])
.config([
    '$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode(true);
        console.debug('Hello World!');
    }
]);