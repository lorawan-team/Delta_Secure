'use_strict';

angular.module('services.devices', [
    'ui.router',
    'services.abstractResources',
/*    'services.helpers',*/
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
/*

        CaasContainers.show = function (query) {
            return this.get(query).$promise
                .then(function (response) {
                    return response.data;
                })
                .then(makeInstance(CaasContainer))
                .then(function (item) {
                    return item;
                });
        };

        CaasContainers.status = function (query) {
            return this.get({ uuid : query + '/status' }).$promise
                .then(function (response) {
                    return response.data;
                })
                .then(function (collection) {
                    return collection;
                });
        };

        CaasContainers.create = function (query, success, error) {
            return this.save(query, success, error);
        };

        CaasContainers.edit = function (query, success, error) {
            return this.update(query, success, error);
        };

        CaasContainers.destroy = function (query, success, error) {
            return this.delete(query, success, error);
        };
*/

        return Devices;
    }
])

.factory('Device', [
    '$state',
    function ($state) {
        var Container = function (attrs) {
            angular.extend(this, attrs);
        };

/*        Container.prototype.edit = function () {
            var self = this;
            $state.go('caas.microservices.show.edit', { 'uuid': self.uuid, 'type': self.container_type_obj.value });
        };

        Container.prototype.destroy = function () {
            var self = this;
            $state.go('caas.microservices.show.remove', { 'uuid': self.uuid, 'type': self.container_type_obj.value });
        };*/

        return Container;
    }
]);
