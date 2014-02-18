askControllers.controller('registerCtrl',['$scope','$routeParams','askKK',


 function($scope,$routeParams,askKK){

   askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
   });


 }]);
