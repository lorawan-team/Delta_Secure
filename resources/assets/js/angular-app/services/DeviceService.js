'use_strict';

angular.module('services.devices', [
    'ui.router',
    'services.abstractResources',
    'services.helpers',
])

.factory('DeviceRepository', [
    'makeArray', 'makeInstance', 'Device',
    function (makeArray, makeInstance, Device) {
        var Devices = AbstractResource('delta.dev/devices/:device_id');

        Devices.list = function () {
            return this.get().$promise
                .then(function (response) {
                    return response.data;
                })
                .then(makeArray(Device))
                .then(function (collection) {
                    return collection;
                });
        };

        return Devices;
    }
])

.factory('Device', [
    '$state',
    function ($state) {
        var Container = function (attrs) {
            angular.extend(this, attrs);
        };

        return Container;
    }
]);
