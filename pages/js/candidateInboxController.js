
askControllers.controller('candidateInboxCtrl',['$scope','$firebaseSimpleLogin', 'authService', '$routeParams','candidateService',

function($scope,$firebaseSimpleLogin, authService, $routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
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
  $scope.inboxAnswered = function(){
    window.location = "#/candidate-inbox-replied";
  }
  $scope.displayQuestionDetail = function(questionId){
    console.log(questionId);
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

  
  $scope.candidates = candidateService;
  $scope.detail = global.questionData[0];
  $scope.data = global.questionData;

}]);

