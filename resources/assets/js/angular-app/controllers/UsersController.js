'use_strict';

angular.module('Controllers.main', [
    'ui.router',
])
.controller('UsersController', [
    '$scope', 'user',
    function ($scope) {
      $scope.test= '123';
    }
]);
