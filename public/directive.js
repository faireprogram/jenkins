(function(window) {


    'use strict';

    window.angular.module('check', [])
        .directive('checkDiretive', function($interval, $http) {

            return {
                template: '<li ng-repeat="msg in msgs">{{msg.status}} : {{msg.time | date:"HH-mm-ss a"}}</li>',
                scope: {
                    url: '@',
                    interval: '@',
                    number: '@'
                },
                link: function(scope, element, attrs) {
                    scope.interval = parseInt(scope.interval || 10);
                    scope.number = parseInt(scope.number || 5);
                    scope.url = scope.url || '/check';
                    scope.msgs = [];

                    var updateMsg = function(status) {
                        return function() {
                            if (scope.msgs.length >= 5) {
                                scope.msgs.shift();
                            }
                            scope.msgs.push({
                                status: status ? 'OK' : 'Not Found'
                            });
                        };
                    };
                    $interval(function() {
                        $http.get(scope.url).success(updateMsg(1)).error(updateMsg(0));
                    }, scope.interval);
                }
            };
        });
})(this);
