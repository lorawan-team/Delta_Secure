'use_strict';

angular.module('services.users', [
    'ui.router',
    'services.abstractResources',
    'services.helpers',
])

.factory('UsersRepository', [
    'makeArray', 'makeInstance', 'User',
    function (makeArray, makeInstance, User) {
        var Users = AbstractResource('delta.dev/users/:user_id');

        Users.list = function (query) {
            return this.get(query).$promise
                .then(function (response) {
                    return response.data;
                })
                .then(makeArray(User))
                .then(function (item) {
                    return item;
                });
        };

        return Users;
    }
])

.factory('User', [
    '$state',
    function ($state) {
        var Container = function (attrs) {
            angular.extend(this, attrs);
        };

        return Container;
    }
]);
