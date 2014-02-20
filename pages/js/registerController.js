askControllers.controller('registerCtrl',['$scope', '$firebaseSimpleLogin', 'authService', '$routeParams','candidateService',


 function($scope,$firebaseSimpleLogin, authService, $routeParams,candidateService){

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    authService.get(user.id).then(function (user) {
      $scope.user = user;
    });
  });
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
