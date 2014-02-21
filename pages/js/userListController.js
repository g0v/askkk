askControllers.controller('userListCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', 'candidateService', function($scope, $firebaseSimpleLogin, authService, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user) {
      authService.get(user.id).then(function (user) {
        $scope.user = user;
      });
    }
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
  $scope.showQuestionDetail = function(questionId){
    event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    
  };
  $scope.voteQuestion = function(questionId){
    event.stopPropagation();
    console.log("vote for this detail, id:"+questionId);

  };
  $scope.myFollowedQuestion = function(){
    console.log("我連署的問題");
  }
  $scope.myQuestion = function(){
    console.log("我提出的問題");
  }
  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.responseData;
   
}]);

