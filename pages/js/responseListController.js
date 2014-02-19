askControllers.controller('responseListCtrl', ['$scope', 'candidateService', function($scope, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.responseData;

  $scope.showQuestionDetail = function(questionId){
    event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    window.location = "#/response/"+questionId;
    
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

