'use strict';
var lagosBustopApp = angular.module('lagosBustopApp', []);
lagosBustopApp.factory('dataListFactory', ['$http', function(http){
  var urlBase =  "https://lagbusstops.herokuapp.com/api";
  var dataListFactory = {};
  var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
  dataListFactory.getData = function(query){
    return http.get(urlBase);
  };
  dataListFactory.postData = function(newData){
    return http.post(urlBase, newData, headers);
  };
  return dataListFactory;
}]);

// lagosBustopApp.factory('dataPostFactory', ['$http', function(http){
//   var postData = function(newData)
// }]);

//lagosBustopApp.factory('')
lagosBustopApp.controller('LagosAppController', function($scope,$http,dataListFactory){
  $scope.getData = function(){
    dataListFactory.getData().success(function(data){
      $scope.lists = data;
      console.log($scope.lists);
    });
  };

  $scope.postData = function(){
    var newBusStopData = $.param({name:$scope.bustop, region:$scope.region});
    dataListFactory.postData(newBusStopData).success(function(){
      console.log(newBusStopData);
      //$scope.getData();
    }).
    error(function(error){
      console.log(error);
    });
    // $http
    // ({
    //   method  : 'POST',
    //   url     : "https://lagbusstops.herokuapp.com/api",
    //   data    : $.param({name:$scope.bustop, region:$scope.region}),  
    //   headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    // })
    // .success(function () {
    //     console.log('Item edited');
    //   }).error(function () {
    //     console.log('Error occured');
    //   });
  };  
});
                                              
  //   dataListFactory.postData(newBusStopData).success(function(){
  //     console.log("Posted");
  //   }).
  //   error(function(error){
  //     console.log(error);
  //   });
  // };