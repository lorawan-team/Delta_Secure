'use_strict';

angular.module('routes', [
    'ui.router',
/*    'providers.states',*/
    'Controllers.main',

    // services
    'services.devices',

])

.config([
    '$stateProvider', '$urlRouterProvider', /*'$modalStateProvider',*/
    function ($stateProvider, $urlRouterProvider /*, $modalStateProvider*/) {

        $stateProvider

            /*.state('caas.microservices',{
                url: '/microservices',
                title: 'Microservices',
                ncyBreadcrumb: {
                    label: 'Microservices',
                },
                resolve: {
                    CaasRepository: 'CaasRepository',
                    containers: [
                        'CaasRepository',
                        function (CaasRepository) {
                            return CaasRepository.list();
                        }
                    ]
                },
                views: {
                    // "titlebar_footer@" : {
                    //     templateUrl: 'api/ng-templates?template=caas.containers.partials.stats',
                    //     controller: 'CaasTitleBarFooterCtrl',
                    // },
                    "titlebar_action@" : {
                        templateUrl: 'api/ng-templates?template=caas.containers.partials.create',
                    },
                    "actionbar@" : {
                        templateUrl: 'api/ng-templates?template=caas.containers.partials.actionbar-refresh',
                    },
                    "" : {
                        templateUrl: 'api/ng-templates?template=caas.containers.index',
                        controller: 'indexCaasCtrl',
                    },
                },
            })
*/
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
                    // "titlebar_footer@" : {
                    //     templateUrl: 'api/ng-templates?template=caas.containers.partials.stats',
                    //     controller: 'CaasTitleBarFooterCtrl',
                    // },
                    "devices@" : {
                        templateUrl: 'views/devices.html',
                        controller: 'DeviceController'
                    },
/*                    "actionbar@" : {
                        templateUrl: 'api/ng-templates?template=caas.containers.partials.actionbar-refresh',
                    },*/

/*                    "" : {
                        templateUrl: 'api/ng-templates?template=caas.containers.index',
                        controller: 'DeviceController',
                    },*/
                },
            });
            /*
            .state('devices.show',{
                url: '',
                title: 'Devices',
            })
            .state('devices.create',{
                url: '',
                title: 'Devices',
            })
            .state('devices.update',{
                url: '',
                title: 'Devices',
            })
            .state('devices.delete',{
                url: '',
                title: 'Devices',
            })

            // Sensors
            .state('sensors',{
                url: '/sensors',
                title: 'Sensors',
            })
            .state('sensors.show',{
                url: '',
                title: 'Sensors',
            })
            .state('sensors.create',{
                url: '',
                title: 'Sensors',
            })
            .state('sensors.update',{
                url: '',
                title: 'Sensors',
            })
            .state('sensors.delete',{
                url: '',
                title: 'Sensors',
            });*/

        // create container page variable views ------end------
/*        $modalStateProvider
            .state('caas.microservices.show.remove', {
                url: '/remove',
                title: 'Microservice details',
                ncyBreadcrumb: {
                    skip: true,
                },
                resolve: {
                    modalData: ['container', function (container) {
                        return container;
                    }],
                },
                modal: {
                    templateUrl: 'api/ng-templates?template=caas.containers.remove',
                    controller: 'removeCaasCtrl',
                    size: 'md',
                }
            });*/
    }
]);
