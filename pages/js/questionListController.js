askControllers.controller('questionListCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.questionData;

  $scope.showQuestionDetail = function(questionId){
    event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    window.location = "#/question/"+questionId;
    

  };
  $scope.voteQuestion = function(questionId){
    event.stopPropagation();
    console.log("vote for this detail, id:"+questionId);

  };
  $scope.sortByTime = function(){
    console.log("sort by time");
  };
  $scope.sortByVotes = function(){
    console.log("sort by votes");
  };
  

}]);
