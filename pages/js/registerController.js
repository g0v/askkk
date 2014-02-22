askControllers.controller('registerCtrl',['$scope', '$firebaseSimpleLogin', 'conf', 'authService', '$routeParams','candidateService',


 function($scope,$firebaseSimpleLogin, conf, authService, $routeParams,candidateService){

   $scope.conf = conf;
  $scope.auth = $firebaseSimpleLogin(new Firebase(conf.firebase));
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
