'use strict';

/**
 * @ngdoc function
 * @name yeomanangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanangularApp
 */
angular.module('yeomanangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
