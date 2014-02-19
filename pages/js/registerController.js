askControllers.controller('registerCtrl',['$scope', '$firebaseSimpleLogin', '$routeParams','candidateService',


 function($scope,$firebaseSimpleLogin,$routeParams,candidateService){

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.candidates = candidateService;


 }]);
