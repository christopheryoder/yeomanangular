'use strict';

/**
 * @ngdoc function
 * @name yeomanangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanangularApp
 */
angular.module('yeomanangularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=38.715%7C-75.104&gslimit=30&format=json&callback=JSON_CALLBACK').success(function(data) {
        $scope.places = data;
        $scope.listings = $scope.places.query.geosearch;
        $scope.markers = {};
        for (var x = 0; x < $scope.listings.length; x++) {
          $scope.markers[x] = {
                lat: $scope.listings[x].lat,
                lng: $scope.listings[x].lon,
                message: $scope.listings[x].title,
                focus: true,
                draggable: true
          };
        }
        console.log($scope.markers);
        angular.extend($scope, {
            markers: $scope.markers
        });
    });
    angular.extend($scope, {
        center: {
            lat: 38.727,
            lng: -75.101,
            zoom: 12
        },
    });
  });
