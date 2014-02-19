askControllers.controller('userListCtrl', ['$scope', '$firebaseSimpleLogin', 'candidateService', function($scope, $firebaseSimpleLogin, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
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

