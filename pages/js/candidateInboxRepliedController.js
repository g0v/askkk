
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$firebaseSimpleLogin', '$location', 'authService', '$routeParams','candidateService', 'questionService', 'userService',

function($scope,$firebaseSimpleLogin, $location, authService, $routeParams,candidateService, questionService, userService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user == null) {
      $location.path("/");
    }
    authService.get(user.id).then(function (user) {
      if (! user || ! user.candidate_id) {
        $location.path("/");
      }
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

  $scope.inboxUnreplied = function(){
    $location.path("/candidate-inbox");
  }
  $scope.displayQuestionDetail = function(questionId){
    $scope.detail = questionService.get(questionId);
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
  
  $scope.candidates = candidateService;
  $scope.detail = null;
  $scope.questions = questionService;

}]);

