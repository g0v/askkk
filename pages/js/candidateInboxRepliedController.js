
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$firebaseSimpleLogin', '$routeParams','candidateService',

function($scope,$firebaseSimpleLogin, $routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.inboxUnreplied = function(){
    window.location = "#/candidate-inbox"
  }
  $scope.displayQuestionDetail = function(questionId){
    console.log(questionId);
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
  
  $scope.candidates = candidateService;
  $scope.detail = global.responseData[0];
  $scope.data = global.responseDataCandidate;

}]);

