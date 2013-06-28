'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('todoBlur', function () {
        return function (scope, elem, attrs) {
            elem.bind('blur', function () {
                elem.val('');
                scope.$apply(attrs.todoBlur);
            });
        };
    })
.directive('todoFocus', function todoFocus($timeout) {
    return function (scope, elem, attrs) {
        scope.$watch(attrs.todoFocus, function (newVal) {
            if (newVal) {
                $timeout(function () {
                    elem[0].focus();
                }, 0, false);
            }
        });
    };
});

