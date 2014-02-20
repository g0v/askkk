askControllers.controller('registerCtrl',['$scope', '$firebaseSimpleLogin', 'authService', '$routeParams','candidateService',


 function($scope,$firebaseSimpleLogin, authService, $routeParams,candidateService){

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.login = function () {
    $scope.auth.$login('facebook')
    .then(function (user) {
      authService.onLogin(user);
    }, function (error) {
    });
  };
  $scope.logout = function () {
    authService.onLogout($scope.auth.user);
    $scope.auth.$logout();
  };
  $scope.candidates = candidateService;


 }]);
