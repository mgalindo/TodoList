'use strict';
/*
angular.module('kadaTodoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {

  }]);
