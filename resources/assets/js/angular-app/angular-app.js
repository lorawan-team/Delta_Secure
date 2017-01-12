'use_strict';

var angularApp = angular.module('app', [
    'routes', 'ui-router',

])

.config([
    '$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode(true);
        console.debug('Hello World!');

    }

])
.controller( 'MainController', [
  "$scope", "$state",
    function($scope, $state) {
      console.debug('test123');
    };
]);
