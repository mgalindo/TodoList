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


//function ConfirmDeleteCtrl($scope, ConfirmService)
//{
//    $scope.cancel = function () {
//        ConfirmService.close();
//    };

//    $scope.doIt = function () {
//        alert("you dirty dog");
//        ConfirmService.close();
//    };
//}

function ListItemController($scope){

    $scope.listarray = [];
    $scope.deleteListItem = function ( idx ) {
        window.confirm('are you sure');
        $scope.listarray.splice(idx, 1);

    };
    $scope.addListItem = function(){
        $scope.listarray.push( $scope.inputlistitem );
    };

}

