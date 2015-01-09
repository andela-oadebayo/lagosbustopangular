'use strict';
var lagosBustopApp = angular.module('lagosBustopApp', []);
lagosBustopApp.factory('dataListFactory', ['$http', function(http){
  
  var dataListFactory = {};
  
  // dataListFactory.getData = function(query){
  //   return http.get(urlBase);
  // };
    return dataListFactory;
}]);


lagosBustopApp.controller('LagosAppController', function($scope,$http,dataListFactory){
  var urlBase =  "https://lagbusstops.herokuapp.com/api";

  //$scope.getData = function(){
    $http.get(urlBase).success(function(data){
       $scope.lists = data;
      console.log($scope.lists);
    });
 // };

  $scope.postData = function(){
    $http(
      {
      method  : 'POST',
      url     : "https://lagbusstops.herokuapp.com/api",
      data    : $.param({name:$scope.bustop, region:$scope.region}),  
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function () {
        console.log('Item edited');
    }).error(function () {
        console.log('Error occured');
      });
  };  
});
 //  LagosAppController.getData();                                          
  //   dataListFactory.postData(newBusStopData).success(function(){
  //     console.log("Posted");
  //   }).
  //   error(function(error){
  //     console.log(error);
  //   });
  // };