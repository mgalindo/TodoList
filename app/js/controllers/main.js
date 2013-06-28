'use strict';
/*
angular.module('kadaTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/


function ListItemController($scope){
    $scope.inputlistitem;
    $scope.listarray = [];
//    var listarray = [
//        {
//        'name': 'listitem1'},
//        {'name': 'listitem2'}
//    ];
//    $scope.allitems = listarray;

    $scope.addListItem = function(){
        $scope.listarray.push( $scope.inputlistitem );
    };

    $scope.deleteItem = function () {
      
    }

}
angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

