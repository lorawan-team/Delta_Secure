'use_strict';

angular.module('services.abstractResources', [
    'ngResource',
    'services.helpers',
/*    'services.auth',*/
])

    .factory('AbstractResource', [
        '$rootScope', '$resource',
        function ($rootScope, $resource) {
            return function (url, params, methods) {

                var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM1Yzg3NzU2Yzk0YTZiYzQ3MDg1MzQ5NGQ4N2Q2NjY5Mjg5ZWNmZGUyYTI2YTRlZjMxNzQzYzE3Yzg2YTEzYjVhYTU1ZWQ5ODA5YWU0YjY1In0.eyJhdWQiOiIxIiwianRpIjoiYzVjODc3NTZjOTRhNmJjNDcwODUzNDk0ZDg3ZDY2NjkyODllY2ZkZTJhMjZhNGVmMzE3NDNjMTdjODZhMTNiNWFhNTVlZDk4MDlhZTRiNjUiLCJpYXQiOjE0NzQ4ODc1ODUsIm5iZiI6MTQ3NDg4NzU4NSwiZXhwIjo0NjMwNTYxMTg1LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.rD06IJzDoOpkVkDkt70Jqzs48E2O00DK2brumPaXxGfkhp3Ta5bxJoCJ94gvq62Do8IcaS2dWjTtBY1N7r65k5Kr26V214e3DfV1_JZBhiGiHCdpcjeMPBK2-u4Z-7Z21LixQHcuD7OFWEvJLS5o9S5dFP9Hc_D2C-uIl0TjCX66uU6s8aywitS2Zt-eRUrwUXPIXeHalXh_uxiDnh-nlTj3K2xTYJMGmBQV8O5LFtz1kaSF3ZkQ2qukDQCQiRvLaChYHbksab2xvpNYcaWhP5s4yTMfpbjkAIM763YqcL95iVTFQ-PImVXXf9kzDZKTvKo8v9v_aUQPoYzkRPoJFXQF6VYfw0fcTvLAnr-lXlz2u3YaRHQ1B2nifctfgcHjAprhhxpI6rqIvr4WWQS27--lTKmywxMlpjrbS460Bxru9Mv2hFNz1J2ZXYuTsdj9mdobeLraKHU1zx__9QY4A4MOk_3MMyxL3rDeQktVCXOhwlICkCIy1j7GwU6uJws21wsKGnaWhUMmrdzeDJSr6h0LrDeBih0OfM1K1MGFi4nkJUUn1uG1VxnLVKwKLaa_Oeo5ytplRFC6nGiX-_j7ov2DY5hLHI9YsPg3QRGqCf0raXILq9P2H0THBmKfnfK-HEvIA_tH5Lhsj8eVHXkiXgJ2rL_4uCCnnKp--PFaoLw";
                var defaultParams = {
                        account_id: "1",
                        device_id: '@device_id',
                        /*uuid: '@uuid',*/
                    },
                    defaultMethods = {
                        'query': {
                            method: 'GET',
                            isArray: false,
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                        'get': {
                            method: 'GET',
                            cache: false,
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                        'save': {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                        'update': {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                        'delete': {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                        'status': {
                            method: 'GET',
                            ignoreHttpErrors: true,
                            headers: {
                                'Content-Type': 'application/vnd.v1+json',
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        },
                    };

                return $resource(
                    url,
                    angular.extend(defaultParams, params),
                    angular.extend(defaultMethods, methods)
                );
            };
        }
    ]);
