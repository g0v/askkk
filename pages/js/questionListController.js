askControllers.controller('questionListCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.questionData;

  $scope.showQuestionDetail = function(questionId){
    console.log("show question detail, id:"+questionId);
    event.stopPropagation();

  };
  $scope.voteQuestion = function(questionId){
    console.log("vote for this detail, id:"+questionId);
    event.stopPropagation();

  };
  $scope.sortByTime = function(){
    console.log("sort by time");
  };
  $scope.sortByVotes = function(){
    console.log("sort by votes");
  };
  

}]);
