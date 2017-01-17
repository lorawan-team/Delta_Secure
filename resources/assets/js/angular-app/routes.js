'use_strict';

angular.module('routes', [
    'ui.router',
/*    'providers.states',*/
    'Controllers.main',

    // services
    'services.devices',
    'services.users',

])

.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
              // Devices
            .state('devices',{
                url: '/devices',
                title: 'Devices',
                resolve: {
                    DeviceRepository: 'DeviceRepository',
                    devices: [
                        'DeviceRepository',
                        function (DeviceRepository) {
                            return DeviceRepository.list();
                        }
                    ]
                },
                views: {
                    "devices@" : {
                        templateUrl: 'views/devices.html',
                        controller: 'DeviceController'
                    },
                },
            })

            // Users
            .state('user',{
                url: '/user/:id',
                title: 'user management',
                resolve: {
                    UserRepository: 'UsersRepository',
                    user: [
                        'UserRepository', '$stateParams',
                        function ($stateParams, UserRepository) {
                            console.debug(UsersRepository.show( { user_id: $stateParams.id } ));
                            return UsersRepository.show( { user_id: $stateParams.id } );
                        }
                    ],
                },
                views: {
                    "" : {
                        templateUrl: 'views/users.html',
                        controller: 'UsersController'
                    },
                },
            });
    }
]);
