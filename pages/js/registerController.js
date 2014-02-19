askControllers.controller('registerCtrl',['$scope','$routeParams','candidateService',


 function($scope,$routeParams,candidateService){

      $scope.candidates = candidateService;


 }]);
